import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardControlLayerComponent } from './keyboard-control-layer.component';

describe('KeyboardControlLayerComponent', () => {
  let component: KeyboardControlLayerComponent;
  let fixture: ComponentFixture<KeyboardControlLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardControlLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardControlLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
