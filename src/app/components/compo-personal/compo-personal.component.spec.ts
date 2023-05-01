import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoPersonalComponent } from './compo-personal.component';

describe('CompoPersonalComponent', () => {
  let component: CompoPersonalComponent;
  let fixture: ComponentFixture<CompoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
