import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-estudiantes',
  templateUrl: './delete-estudiantes.component.html',
  styleUrls: ['./delete-estudiantes.component.css']
})
export class DeleteEstudiantesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() alumnosArray: any ;

  @Input() alumnos : any;

  eliminaAlumno : object = {id : 0 , nombre : '' , apellido : "" , edad : 0};

  @Output() EliminaDatos =  new EventEmitter<object>();


  onDelete() {
    console.log(this.alumnos);
    this.EliminaDatos.emit(this.alumnos);
  }

}
