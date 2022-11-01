import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateStudentDTO } from './dto/create-student.dto';
import { StudentsService } from './students.service';
import { NewStudentResponseDTO } from './dto/new-student-response.dto';
import { FetchStudentsResponseDTO } from './dto/fetch-students-response.dto';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private readonly service: StudentsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Create a new student and returns their info.',
    type: NewStudentResponseDTO,
  })
  create(@Body() newStudent: CreateStudentDTO) {
    return this.service.create(newStudent);
  }

  @ApiCreatedResponse({
    description: 'Fetch the list of students for the matching school',
    type: FetchStudentsResponseDTO,
  })
  @Get()
  fetchBySchoolName(@Query() { school }) {
    return this.service.fetchBySchoolName(school);
  }
}
