import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppprintdataComponent } from './appprintdata.component';

describe('AppprintdataComponent', () => {
  let component: AppprintdataComponent;
  let fixture: ComponentFixture<AppprintdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppprintdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppprintdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
