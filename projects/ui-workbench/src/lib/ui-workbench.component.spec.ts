import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWorkbenchComponent } from './ui-workbench.component';

describe('UiWorkbenchComponent', () => {
  let component: UiWorkbenchComponent;
  let fixture: ComponentFixture<UiWorkbenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiWorkbenchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiWorkbenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
