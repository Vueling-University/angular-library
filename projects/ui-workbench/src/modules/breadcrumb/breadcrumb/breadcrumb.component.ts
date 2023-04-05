import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { IBreadCrumb } from './interface/breadcrumb.interface';

@Component({
  selector: 'doejohn-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  // @Input() importRoute: string;

  public breadcrumbs: IBreadCrumb[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  /**
   * Recursively build breadcrumb according to activated route.
   * @param route
   * @param url
   * @param breadcrumbs
   */
  buildBreadCrumb(
    route: ActivatedRoute,
    url = '',
    breadcrumbs: IBreadCrumb[] = []
  ): IBreadCrumb[] {
    //If no routeConfig is avalailable we are on the root path
    let label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data['breadcrumb']
        : '';
    let path =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    // If the route is dynamic route such as ':id', remove it
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastRoutePart = path!.split('/').pop();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const isDynamicRoute = lastRoutePart!.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const paramName = lastRoutePart!.split(':')[1];
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      path = path!.replace(lastRoutePart!, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }

    //In the routeConfig the complete path is not available,
    //so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl,
    };
    // Only adding route with non-empty label
    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    if (route.firstChild) {
      //If we are not on our current path yet,
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
      });
  }
}
