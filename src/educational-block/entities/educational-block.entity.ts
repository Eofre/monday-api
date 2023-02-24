import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Word } from "src/types/types";

interface EducationalBlockCreationAttrs {
  name: string;
  description: string;
  words: Word[];
}

@Table({ tableName: "educationalBlocks" })
export class EducationalBlock extends Model<
  EducationalBlock,
  EducationalBlockCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @Column({ type: DataType.JSON, allowNull: false })
  words: Word[];
}
