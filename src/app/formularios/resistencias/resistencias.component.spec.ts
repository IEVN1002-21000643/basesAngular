import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResistenciasComponent } from './resistencias.component';

describe('FormResistenciasComponent', () => {
  let component: FormResistenciasComponent;
  let fixture: ComponentFixture<FormResistenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormResistenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
