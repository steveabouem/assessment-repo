import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import initializeQueryRunner from 'src/common/initQueryRunner';

@Injectable()
export class StudentsService {
  constructor(private dataSource: DataSource) {}

  async fetch(id: number) {
    const qr = await initializeQueryRunner(this.dataSource);
    // logic
    
  }

  async create(newStudent) {
    const qr = await initializeQueryRunner(this.dataSource);
    // logic

  }

  async fetchBySchoolName(schoolName: string) {
    const qr = await initializeQueryRunner(this.dataSource);
    // logic
}
