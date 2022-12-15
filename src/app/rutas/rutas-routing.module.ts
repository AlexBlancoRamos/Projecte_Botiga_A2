import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistreComponent} from "../registre/registre.component";
import {IniciComponent} from "../inici/inici.component";

const routes: Routes = [
  {
     path : 'post/:variable' ,
    component: RegistreComponent
  },
  {
    path : '' ,
    component: IniciComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
