import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class createProductsDto {
  @ApiProperty({ description: "Nome do produto" })
  @IsNotEmpty({ message: "Informe o nome do produto" })
  name: string

  @ApiProperty({ description: "Tipo do produto" })
  @IsNotEmpty({ message: "Informe o tipo do produto" })
  type: string

  @ApiProperty({ description: "Preço do produto" })
  @IsNotEmpty({ message: "Informe o preço do produto" })
  price: number

  @ApiProperty({ description: "Quantidade disponivel" })
  @IsNotEmpty({ message: "Informe quantos produtos estão disponiveis do produto" })
  quantity: number
}
export class buyProductsDto {
  @ApiProperty({ description: "Id do produto a ser comprado" })
  @IsNotEmpty({ message: "Informe o id do produto" })
  id: number

  @ApiProperty({ description: "Quantidade disponivel" })
  @IsNotEmpty({ message: "Informe quantos produtos serão comprados" })
  quantity: number
}