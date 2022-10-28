import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateStudentDTO } from './dto/create-student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly service: StudentsService) {}

  @Post()
  create(@Body() newStudent: CreateStudentDTO) {
    return this.service.create(newStudent);
  }

  @Get()
  fetchBySchoolName(@Query() { school }) {
    return this.service.fetchBySchoolName(school);
  }
}
