import { Component, OnInit } from '@angular/core';
import { Enrollment } from 'src/app/models/enrollment.interface';
import { Param } from 'src/app/models/param.interface';
import { EnrollmentService } from 'src/app/services/enrollments.service';

@Component({
  selector: 'list-solicitud-matriculas',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListSolicitudMatriculasComponent implements OnInit {
  enrollments: Enrollment[] = [];

  params: Param[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.getEnrollments();
  }

  /**
   * Este método se encarga de obtener la información sobre los registros de inscripción.
   * Utiliza el servicio de inscripción para obtener los registros y se suscribe a la respuesta.
   * Si el estado de la respuesta es "éxito", los registros de inscripción se almacenan en el atributo "enrollments".
   */
  getEnrollments() {
    this.enrollmentService.getEnrollments().subscribe((res: any) => {
      if (res.status === 'success') {
        this.enrollments = res.data.enrollments;
      }
    });
  }

  getEnrollmentsByTerm(term: string) {
    this.enrollmentService.getEnrollmentsByTerm(term).subscribe((res: any) => {
      if (res.status === 'success') {
        this.enrollments = res.data.enrollments;
      }
    });
  }

  getEnrollmentsByParams(params: any) {
    this.enrollmentService
      .getEnrollmentsByParams(params)
      .subscribe((res: any) => {
        if (res.status === 'success') {
          this.enrollments = res.data.enrollments;
        }
      });
  }

  receiveSearch($event: string) {
    this.getEnrollmentsByTerm($event);
  }

  receiveParams($event: Param) {
    this.addNewParams($event);
  }

  addNewParams(param: Param) {
    this.params = this.params.filter((p) => p.type !== param.type);
    this.params.push(param);
    console.log('params', this.params);
    this.getEnrollmentsByParams(this.params);
  }
}
