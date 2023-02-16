import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "users", modelName: "users" })
export class UsersEntity extends Model {
  @Column({
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataType.INTEGER
  })
  id: number

  @Column({
    allowNull: false,
    type: DataType.STRING(100)
  })
  name: string

  @Column({
    allowNull: false,
    type: DataType.STRING(150)
  })
  login: string

  @Column({
    allowNull: false,
    type: DataType.STRING(150)
  })
  email: string

  @Column({
    allowNull: false,
    type: DataType.STRING(50)
  })
  password: string

  @Column({
    allowNull: true,
    type: DataType.STRING(150)
  })
  roles: string
}