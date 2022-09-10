import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-emple',
  templateUrl: './lista-emple.component.html',
  styleUrls: ['./lista-emple.component.css']
})
export class ListaEmpleComponent implements OnInit {
  
  empleados:Empleado[];
  constructor(private empleadoServicio:EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerlistaEmpleados().subscribe(dato=>{
      this.empleados =dato;
    })
  }
}
