import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoSucursalComponent } from './compo-sucursal.component';

describe('CompoSucursalComponent', () => {
  let component: CompoSucursalComponent;
  let fixture: ComponentFixture<CompoSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
