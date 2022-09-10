import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpleComponent } from './lista-emple.component';

describe('ListaEmpleComponent', () => {
  let component: ListaEmpleComponent;
  let fixture: ComponentFixture<ListaEmpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEmpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
