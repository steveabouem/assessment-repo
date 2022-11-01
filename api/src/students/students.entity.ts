import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Student {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  first_name: string;

  @ApiProperty()
  @Column({ nullable: false })
  last_name: string;

  @ApiProperty()
  @Column({ nullable: false })
  grade: string;

  @ApiProperty()
  @Column({ nullable: false })
  school_name: string;
}
