import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './view/estudiantes/estudiantes.component';
import { EstudiantesModule} from './view/estudiantes/estudiantes.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    EstudiantesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
