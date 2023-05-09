import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoProducComponent } from './compo-produc.component';

describe('CompoProducComponent', () => {
  let component: CompoProducComponent;
  let fixture: ComponentFixture<CompoProducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoProducComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
