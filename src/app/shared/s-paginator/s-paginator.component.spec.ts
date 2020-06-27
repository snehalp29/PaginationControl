import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPaginatorComponent } from './s-paginator.component';

describe('SPaginatorComponent', () => {
  let component: SPaginatorComponent;
  let fixture: ComponentFixture<SPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
