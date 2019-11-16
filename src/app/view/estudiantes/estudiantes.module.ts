import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEstudiantesComponent } from './create-estudiantes/create-estudiantes.component';
import { DeleteEstudiantesComponent } from './delete-estudiantes/delete-estudiantes.component';
import { UpdateEstudiantesComponent } from './update-estudiantes/update-estudiantes.component';
import { ListEstudiantesComponent } from './list-estudiantes/list-estudiantes.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CreateEstudiantesComponent, DeleteEstudiantesComponent, UpdateEstudiantesComponent, ListEstudiantesComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CreateEstudiantesComponent,
    UpdateEstudiantesComponent,
    ListEstudiantesComponent,
    DeleteEstudiantesComponent,
    ReactiveFormsModule
  ]
  
})
export class EstudiantesModule { }
