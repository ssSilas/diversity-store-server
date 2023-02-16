import { IsNotEmpty } from "class-validator"

export class createProductsDto {
  @IsNotEmpty({ message: "Informe o nome do produto" })
  name: string

  @IsNotEmpty({ message: "Informe o tipo do produto" })
  type: string

  @IsNotEmpty({ message: "Informe o preço do produto" })
  price: number

  @IsNotEmpty({ message: "Informe quantos produtos estão disponiveis do produto" })
  quantity: number
}