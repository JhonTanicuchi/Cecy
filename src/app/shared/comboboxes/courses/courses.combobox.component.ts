import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/course.interface';
import { Param } from 'src/app/models/param.interface';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'combobox-courses',
  templateUrl: './courses.combobox.component.html',
})
export class CoursesComboboxComponent {
  courses: Course[] = [];
  @Output() selected = new EventEmitter<Param>();

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    return this.coursesService
      .getCourses()
      .subscribe((courses) => (this.courses = courses));
  }

  select(course: Course) {
    const courseParam: Param = {
      type: 'course_id',
      term: course.id.toString(),
    };
    this.selected.emit(courseParam);
  }
}
