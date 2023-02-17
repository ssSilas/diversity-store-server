import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ProductsEntity } from "src/products/products.entity";
import { UsersEntity } from "src/user/user.entity";

@Table({ tableName: "saleshistory", modelName: "saleshistory", createdAt: true })
export class salesHistoryEntity extends Model {
  @Column({
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataType.INTEGER
  })
  id: number

  @ForeignKey(() => UsersEntity)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  userfk: number

  @ForeignKey(() => ProductsEntity)
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  productfk: number
  
  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  quantity: number
}