import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraTwodComponent } from './camera-twod.component';

describe('CameraTwodComponent', () => {
  let component: CameraTwodComponent;
  let fixture: ComponentFixture<CameraTwodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraTwodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraTwodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
