import { Career } from "./career.interface";
import { Catalog } from "./catalog.interface";
import { Course } from "./course.interface";
import { Student } from "./student.interface";

export interface Enrollment {
  id: number;
  student_id: Student;
  career_id: Career;
  course_id: Course;
  date: Date;
  state_id: Catalog;
  type_enrollment_id: Catalog;
  created_at: Date;
  updated_at: Date;
}
