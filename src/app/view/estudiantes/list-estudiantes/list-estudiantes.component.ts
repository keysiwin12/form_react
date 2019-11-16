import { Component, OnInit, Input, Output,PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-list-estudiantes',
  templateUrl: './list-estudiantes.component.html',
  styleUrls: ['./list-estudiantes.component.css'],
  providers: [DecimalPipe]
})
export class ListEstudiantesComponent  {
  
  alumnos: any = [
    {
      id:1,
      nombre: 'Marco',
      apellido: "Rau",
      edad: 14
    },
    {
      id:2,
      nombre: 'Abel',
      apellido: "Quispe",
      edad: 14
    },
    {
      id:3,
      nombre: 'Pedro',
      apellido: "Zanabria",
      edad: 15
    },
    {
      id:4,
      nombre: 'Jose',
      apellido: "Buendia",
      edad: 16
    }
  ];
  
   search(text: string, pipe: PipeTransform): Array<object> {
    return this.alumnos.filter(alumno => {
      const term = text.toLowerCase();
      return alumno.nombre.toLowerCase().includes(term)
          || alumno.apellido.toLowerCase().includes(term)
          || pipe.transform(alumno.edad).includes(term);
    });
  }
  
    alumnos$: Observable<Array<object>>;
    filter = new FormControl('');
  
    constructor(pipe: DecimalPipe) {
      this.alumnos$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text, pipe))
      );
    }
  
  EliminaDatos(eliminaAlumno) {
    this.alumnos = this.alumnos.filter( x => x != eliminaAlumno);
    console.log("eliminado");
  }

  procesaDatos(nuevoAlumno) {
    nuevoAlumno.id = this.alumnos.length+1;
    this.alumnos.push(nuevoAlumno);
  }

  id : number;
  editaDatos(editaAlumno) {
    this.id = editaAlumno.id-1;
    console.log(this.id);
    this.alumnos[this.id] = editaAlumno;
  }
  
  
}


