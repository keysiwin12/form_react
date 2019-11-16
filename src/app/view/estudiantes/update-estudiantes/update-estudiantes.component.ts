import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl , FormGroup, FormBuilder , Validators, AbstractControl, ValidatorFn} from '@angular/forms'
@Component({
  selector: 'app-update-estudiantes',
  templateUrl: './update-estudiantes.component.html',
  styleUrls: ['./update-estudiantes.component.css']
})
export class UpdateEstudiantesComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
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
  
  public formGroup: FormGroup;
  
  guardarEditados() {
    this.editaAlumno = this.formGroup.value;
    console.log(this.editaAlumno);
  }

  editaAlumno  : object = {id : 0 , nombre : '' , apellido : "" , edad : 0};

  @Output()  pasarEditados = new  EventEmitter<object>();


  onEditar() {
    this.pasarEditados.emit(this.editaAlumno);
  }
  
  @Input() alumnosE : any; 
  

  mostrarEdit() {
    console.log(this.alumnosE.id);
  }

  private buildForm() {  
    const nombre = this.alumnosE.nombre;
    this.formGroup = this.formBuilder.group({
      id: this.alumnosE.id,
      nombre: new FormControl(nombre,Validators.required),
      apellido: new FormControl(this.alumnosE.apellido,[Validators.required,Validators.minLength(4)]),
      edad : new FormControl(this.alumnosE.edad,[Validators.required,this.minEdad(0)])
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


