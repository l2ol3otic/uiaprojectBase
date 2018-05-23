import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppuserdataComponent } from './appuserdata.component';

describe('AppuserdataComponent', () => {
  let component: AppuserdataComponent;
  let fixture: ComponentFixture<AppuserdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppuserdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppuserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
