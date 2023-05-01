import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoProveedoresComponent } from './compo-proveedores.component';

describe('CompoProveedoresComponent', () => {
  let component: CompoProveedoresComponent;
  let fixture: ComponentFixture<CompoProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
