import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleComponent } from './lista-emple/lista-emple.component';
import { RegistarEmpleadoComponent } from './registar-empleado/registar-empleado.component';

const routes: Routes = [
  {path : 'empleados',component:ListaEmpleComponent},
  {path :'',redirectTo:'empleados',pathMatch:'full'},
  {path : 'registar-empleado',component:RegistarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
