import { Component, Input, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { NavigationServiceService } from './service/navigation-service/navigation-service.service';

@Component({
  selector: 'doejohn-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
})
export class HeaderComponentComponent {
  @Input() links: LinksInterface[] = [];
  constructor(
    // public translate: TranslateService,
    public navigation: NavigationServiceService
  ) {
    // translate.addLangs(['es', 'en', 'cat']);
    // if (localStorage.getItem('locale')) {
    //   translate.setDefaultLang(localStorage.getItem('locale') || '[]');
    //   translate.use(localStorage.getItem('locale') || '[]');
    // } else {
    //   const browserLang = translate.getBrowserLang();
    //   translate.setDefaultLang(browserLang || '[]');
    //   translate.use(browserLang?.match(/es|en|cat/) ? browserLang : 'es');
    //   localStorage.setItem('locale', browserLang || '[]');
    // }
  }

  ngOnInit(): void {}

  // switchLanguage(lang: string) {
  //   this.translate.use(lang);
  // }
}

export interface LinksInterface {
  name: string;
  router: string[] | undefined;
}
