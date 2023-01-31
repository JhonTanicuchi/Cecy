import { Component, OnInit } from '@angular/core';
import { Enrollment } from 'src/app/models/enrollment.interface';
import { EnrollmentService } from '../solicitud-matricula.service';

@Component({
  selector: 'list-solicitud-matriculas',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListSolicitudMatriculasComponent implements OnInit {
  enrollments: Enrollment[] = [];
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
  searchEnrollments(term: string) {
    this.enrollmentService.getEnrollmentsByTerm(term).subscribe((res: any) => {
      if (res.status === 'success') {
        this.enrollments = res.data.enrollments;
      }
    });
  }
  receiveSearch($event: string) {
    console.log($event);
    this.searchEnrollments($event);
  }

}
