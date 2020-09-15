import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathLinesComponent } from './path-lines.component';

describe('PathLinesComponent', () => {
  let component: PathLinesComponent;
  let fixture: ComponentFixture<PathLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
