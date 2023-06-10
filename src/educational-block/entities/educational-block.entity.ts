import { Column, DataType, Model, Table } from "sequelize-typescript";
import { IWord } from "src/types/types";

interface EducationalBlockCreationAttrs {
  name: string;
  description: string;
  words: IWord[];
}

@Table({ tableName: "educational_block" })
export class EducationalBlock extends Model<
  EducationalBlock,
  EducationalBlockCreationAttrs
> {
 
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    get() {
      const wordsJSON = this.getDataValue("words");
      return wordsJSON ? JSON.parse(wordsJSON) : [];
    },
    set(value: IWord[]) {
      const wordsJSON = JSON.stringify(value);
      this.setDataValue("words", wordsJSON);
    },
  })
  words: IWord[];

}
