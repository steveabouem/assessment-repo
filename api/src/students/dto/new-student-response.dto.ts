import { ApiProperty } from '@nestjs/swagger';
import { Student } from 'src/students/students.entity';

export class NewStudentResponseDTO {
  @ApiProperty()
  succcess: boolean;

  @ApiProperty({ title: 'Newly generated student' })
  data: Student;
}
