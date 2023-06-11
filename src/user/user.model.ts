import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "user" })
export class EducationalBlock extends Model{

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    fullName: string

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    password: string
}