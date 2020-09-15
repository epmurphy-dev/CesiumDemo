import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleLayerExampleComponent } from './circle-layer-example.component';

describe('CircleLayerExampleComponent', () => {
  let component: CircleLayerExampleComponent;
  let fixture: ComponentFixture<CircleLayerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleLayerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleLayerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
