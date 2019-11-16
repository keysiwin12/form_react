import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl , FormGroup,FormBuilder , Validators, ValidatorFn, AbstractControl} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-create-estudiantes',
  templateUrl: './create-estudiantes.component.html',
  styleUrls: ['./create-estudiantes.component.css']
})


export class CreateEstudiantesComponent implements OnInit {
  closeResult: string;
  
  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) { 
    
  }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  
  

  guardarDatos() {
    console.log(this.formGroup.value.nombre);
    this.nuevoAlumno = this.formGroup.value;
  }

  nuevoAlumno : object = {id : 0 , nombre : '' , apellido : "" , edad : 0};
  
  @Output() pasarDatos =  new EventEmitter<object>();

  onPasar() {
    this.pasarDatos.emit(this.nuevoAlumno);
    console.log(this.nuevoAlumno);
  }

  ngOnInit() {
    this.buildForm();
  }

  public formGroup: FormGroup;


  private buildForm() {

    const nombre = '';
    this.formGroup = this.formBuilder.group({
      nombre: nombre.toLowerCase(),
      apellido: new FormControl(null,[Validators.required,Validators.minLength(2)]),
      edad : new FormControl(null)
    });
  }

  public initForm() {
    this.formGroup = this.formBuilder.group( {
      nombre : new FormControl(null,Validators.required),
      apellido : new FormControl(null,[Validators.required,Validators.minLength(4)]) ,
      edad : new FormControl(null,[Validators.required,this.minEdad(0)])
    });
  }

  minEdad(minEdad:number) : ValidatorFn {
    return (control : AbstractControl) : {[key : string] :any} | null => {
      if(control.value !== undefined && control.value <= minEdad) {
        return {
          'minEdad' : true
        }

      } else {
        return null;
      }
    }
  }

  get edad() {
    return this.formGroup.get('edad');
  }
  
}


