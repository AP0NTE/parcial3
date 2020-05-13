import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../services/persona.service';
import {Persona} from '../models/persona';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-persona-tabla',
  templateUrl: './persona-tabla.component.html',
  styleUrls: ['./persona-tabla.component.css']
})
export class PersonaTablaComponent implements OnInit {
  filtro='';
  persona :Persona[];
  personas:Persona;
  constructor(private personaservice:PersonaService,private route :ActivatedRoute,private location :Location) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.personaservice.getAll().subscribe(persona=>this.persona=persona);
  }
}
