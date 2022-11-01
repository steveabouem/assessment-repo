import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDTO {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  school_name: string;

  @ApiProperty({
    example: 'A-',
    description: 'A+ | A | A- | B+ | B- | C+ | D- | D+ | D- | F',
  })
  grade: string;
}
