import { Person } from "./person.interface";

export interface Student {
  id: number;
  person_id: Person;
  created_at: Date;
  updated_at: Date;
}
