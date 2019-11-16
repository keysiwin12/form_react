import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEstudiantesComponent } from './delete-estudiantes.component';

describe('DeleteEstudiantesComponent', () => {
  let component: DeleteEstudiantesComponent;
  let fixture: ComponentFixture<DeleteEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
