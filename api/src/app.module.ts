import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './students/students.entity';
import { StudentsModule } from './students/students.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.DB_HOST}`,
      port: parseInt(process.env.DB_PORT),
      username: `${process.env.DB_USER}`,
      password: `${process.env.DB_PASSWORD}`,
      database: `${process.env.DB_NAME}`,
      entities: [Student],
      migrations: ['src/db/migrations'],
      synchronize: true,
    }),
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
