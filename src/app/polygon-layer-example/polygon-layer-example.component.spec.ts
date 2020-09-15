import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonLayerExampleComponent } from './polygon-layer-example.component';

describe('PolygonLayerExampleComponent', () => {
  let component: PolygonLayerExampleComponent;
  let fixture: ComponentFixture<PolygonLayerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonLayerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonLayerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
