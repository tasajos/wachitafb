import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarwComponent } from './agregarw.component';

describe('AgregarwComponent', () => {
  let component: AgregarwComponent;
  let fixture: ComponentFixture<AgregarwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
