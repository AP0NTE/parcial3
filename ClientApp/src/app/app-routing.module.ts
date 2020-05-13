import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PersonaComponent}from './persona/persona.component';
import {PersonaTablaComponent} from './persona-tabla/persona-tabla.component';

const routes: Routes = [
  {path: '',component:PersonaComponent},
  {path: 'tabla',component:PersonaTablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

