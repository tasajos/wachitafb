import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadowComponent } from './listadow.component';

describe('ListadowComponent', () => {
  let component: ListadowComponent;
  let fixture: ComponentFixture<ListadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
