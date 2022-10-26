export class CreateStudentDTO {
  firstName: string;
  lastName: string;
  grade: number | GradesEnum;
}

enum GradesEnum {
  'A' = 'A',
  'B' = 'B',
  'C' = 'C',
  'D' = 'D',
  'E' = 'E',
  'F' = 'F',
}
