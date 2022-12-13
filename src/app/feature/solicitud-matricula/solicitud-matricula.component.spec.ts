import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudMatriculaComponent } from './solicitud-matricula.component';

describe('SolicitudMatriculaComponent', () => {
  let component: SolicitudMatriculaComponent;
  let fixture: ComponentFixture<SolicitudMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudMatriculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
