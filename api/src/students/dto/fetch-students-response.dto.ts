import { ApiProperty } from '@nestjs/swagger';
import { Student } from '../students.entity';

export class FetchStudentsResponseDTO {
  @ApiProperty()
  succcess: boolean;

  @ApiProperty({ isArray: true })
  data: Student;
}
