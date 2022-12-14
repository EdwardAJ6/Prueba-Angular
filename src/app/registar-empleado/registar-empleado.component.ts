import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registar-empleado',
  templateUrl: './registar-empleado.component.html',
  styleUrls: ['./registar-empleado.component.css']
})
export class RegistarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  constructor(private empleadoServicio:EmpleadoService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.irListaEmpleados();
    },error => console.log(error));
  }

  irListaEmpleados(){
    this.router.navigate(['/empleados'])
  }
  onSubmit(){
    this.guardarEmpleado();
  }

}
