import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCinepolisComponent } from './cinepolis.component';

describe('FormCinepolisComponent', () => {
  let component: FormCinepolisComponent;
  let fixture: ComponentFixture<FormCinepolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCinepolisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCinepolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
