import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioProducto } from './servicio-producto';

describe('ServicioProducto', () => {
  let component: ServicioProducto;
  let fixture: ComponentFixture<ServicioProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
