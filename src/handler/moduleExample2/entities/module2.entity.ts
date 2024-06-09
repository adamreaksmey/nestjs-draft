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
import ModuleOneTable from 'src/handler/moduleExample1/entities/module1.entity';

const indexColumns = ['columnOne', 'columnTwo'];

@Entity()
@Index(indexColumns)
class ModuleTwoTable {
  // ----------- Primary colums -----------
  @PrimaryGeneratedColumn()
  public id: number;

  // ----------- Relation columns -----------
  @Column({ type: 'uuid', nullable: true, unique: true })
  public relationalToColumnOne: string;

  @OneToOne(() => ModuleOneTable, (m1) => m1.moduleTwo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'relationalToColumnOne',
    referencedColumnName: 'relationalToColumnOne',
  })
  public moduleOne: ModuleOneTable;
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

export default ModuleTwoTable;
