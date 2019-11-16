import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstudiantesComponent } from './create-estudiantes.component';

describe('CreateEstudiantesComponent', () => {
  let component: CreateEstudiantesComponent;
  let fixture: ComponentFixture<CreateEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



