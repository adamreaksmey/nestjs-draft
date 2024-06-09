import ModuleTwoTable from 'src/handler/moduleExample2/entities/module2.entity';
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
  OneToOne,
} from 'typeorm';

const indexColumns = ['columnOne', 'columnTwo'];

@Entity()
@Index(indexColumns)
class ModuleOneTable {
  // ----------- Primary colums -----------
  @PrimaryGeneratedColumn()
  public id: number;

  // ----------- Relation columns -----------
  @Column({ type: 'uuid', nullable: true, unique: true })
  public relationalToColumnOne: string;
  @OneToOne(() => ModuleTwoTable, (m2) => m2.moduleOne, {
    cascade: true,
  })
  public moduleTwo: ModuleTwoTable;
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
