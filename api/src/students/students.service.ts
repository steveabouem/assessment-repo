import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Student } from './students.entity';
import { BaseResponseDTO } from 'src/common/dto/base-response.dto';

@Injectable()
export class StudentsService {
  constructor(private dataSource: DataSource) {}

  async create(newStudent): Promise<BaseResponseDTO> {
    const qr = this.dataSource.createQueryRunner();
    await qr.connect();
    await qr.startTransaction();

    try {
      const student = new Student();
      Object.assign(student, { ...newStudent });

      /**NOTE:
       * qr.manager.save(student) is the equivalent of running:
       * INSERT INTO student  (
       *  first_name, last_name,
       *  schoolName, grade
       * ) VALUES (...);
       */

      await qr.manager.save(student);

      // persist student record
      await qr.commitTransaction();

      // end transaction
      qr.release();

      return { success: true, data: student };
    } catch (e) {
      qr.release();
      return { success: false, data: e };
    }
  }

  async fetchBySchoolName(schoolName: string): Promise<BaseResponseDTO> {
    try {
      /**
       * SELECT * FROM student WHERE "schoolName" Like `%${val}%';
       */
      const data = await this.dataSource.manager
        .createQueryBuilder(Student, 'student')
        .where('LOWER(student.schoolName) LIKE :schoolName', {
          schoolName: `%${schoolName.toLowerCase()}%`,
        })
        .getOne();

      return { success: true, data };
    } catch (e) {
      return { success: false, data: e };
    }
  }
}
