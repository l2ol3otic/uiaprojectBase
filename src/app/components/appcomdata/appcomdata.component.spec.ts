import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcomdataComponent } from './appcomdata.component';

describe('AppcomdataComponent', () => {
  let component: AppcomdataComponent;
  let fixture: ComponentFixture<AppcomdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcomdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcomdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
