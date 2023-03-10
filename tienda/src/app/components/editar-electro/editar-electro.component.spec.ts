import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarElectroComponent } from './editar-electro.component';

describe('EditarElectroComponent', () => {
  let component: EditarElectroComponent;
  let fixture: ComponentFixture<EditarElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarElectroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
