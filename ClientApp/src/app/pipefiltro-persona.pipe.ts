import { Pipe, PipeTransform } from '@angular/core';
import {Persona}from'./models/persona';

@Pipe({
  name: 'pipefiltroPersona'
})
export class PipefiltroPersonaPipe implements PipeTransform {

  transform(persona: Persona[],search:string): any {
    if(search==null)return persona;
    return persona.filter(p=>p.nombre.toLowerCase()
    .indexOf(search.toLowerCase())!==-1);
  }

}
