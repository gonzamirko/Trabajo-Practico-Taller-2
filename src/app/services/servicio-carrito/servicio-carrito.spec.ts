import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioCarrito } from './servicio-carrito';

describe('ServicioCarrito', () => {
  let component: ServicioCarrito;
  let fixture: ComponentFixture<ServicioCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioCarrito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioCarrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
