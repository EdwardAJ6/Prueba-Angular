import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta URL obtiene los empleados en el backend
  private baseURL="http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }  

  //Este metodo nmos permtie obtener los empleados
  obtenerlistaEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  //Este metodo nos crea un empleado
  registrarEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);

  }
}
