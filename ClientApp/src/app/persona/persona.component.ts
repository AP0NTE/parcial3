import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../services/persona.service';
import {Persona} from '../models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  constructor(private  personaservice:PersonaService){}
  persona : Persona;

ngOnInit() {
  this.persona ={id:0, identificacion :'', nombre :'', apellido :'',
  sexo:'',edad:'',departamento:'',ciudad:'',alimentario:'',valor:0,estado:''}
}
add(){
  this.persona.estado='activo';
  console.log(this.persona);
  this.personaservice.add(this.persona)
  .subscribe();
}


}
