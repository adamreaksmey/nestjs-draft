import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

const indexColumns = ['columnOne', 'columnTwo'];

@Entity()
@Index(indexColumns)
class ModuleOneTable {
  // ----------- Primary colums -----------
  @PrimaryGeneratedColumn()
  public id: number;

  // ----------- Relation columns -----------
  // ----------- Normal columns -----------
  @Column({ nullable: true })
  public columnOne: string;

  @Column({ nullable: true })
  public columnTwo: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}

export default ModuleOneTable;
