import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { salesHistoryEntity } from "src/sales-history/sales-history.entity";

@Table({ tableName: "products", modelName: "products" })
export class ProductsEntity extends Model {
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
    type: DataType.STRING(30)
  })
  type: string

  @Column({
    allowNull: false,
    type: DataType.STRING(50)
  })
  price: number

  @Column({
    allowNull: false,
    type: DataType.INTEGER
  })
  quantity: number

  @Column({
    allowNull: false,
    type: DataType.STRING(255)
  })
  imagelink: string

  @HasMany(() => salesHistoryEntity)
  saleshistory: salesHistoryEntity
}