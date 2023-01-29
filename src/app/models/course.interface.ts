import { Career } from "./career.interface";

export interface Course {
  id: number;
  name: string;
  career_id: Career;
  semester: number;
  created_at: Date;
  updated_at: Date;
}
