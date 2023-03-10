import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectroComponent } from './create-electro.component';

describe('CreateElectroComponent', () => {
  let component: CreateElectroComponent;
  let fixture: ComponentFixture<CreateElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElectroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
