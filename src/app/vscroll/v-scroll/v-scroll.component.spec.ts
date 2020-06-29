import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VScrollComponent } from './v-scroll.component';

describe('VScrollComponent', () => {
  let component: VScrollComponent;
  let fixture: ComponentFixture<VScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
