import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleElectroComponent } from './detalle-electro.component';

describe('DetalleElectroComponent', () => {
  let component: DetalleElectroComponent;
  let fixture: ComponentFixture<DetalleElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleElectroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
