
import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"

export class SignInDto {
  @ApiProperty({ description: "Conjunto de caracteres que o usuário utiliza para acessar o sistema" })
  @IsNotEmpty({ message: "O campo login não pode estar vazio" })
  login: string

  @ApiProperty({ description: "Senha que o usuário utiliza para acessar o sistema" })
  @IsNotEmpty({ message: "O campo password não pode estar vazio" })
  password: string
}
export class CreateUserDto {
  @ApiProperty({ description: "Nome do usuário" })
  @IsNotEmpty({ message: "Favor informar um nome" })
  name: string

  @ApiProperty({ description: "Email do usuário" })
  @IsNotEmpty({ message: "Favor informar um nome" })
  @IsEmail({}, { message: 'Favor informar um email válido' })
  email: string

  @ApiProperty({ description: "Conjunto de caracteres que o usuário utiliza para acessar o sistema" })
  @IsNotEmpty({ message: "Favor informar um login" })
  login: string

  @ApiProperty({ description: "Senha que o usuário utiliza para acessar o sistema" })
  @IsNotEmpty({ message: "Favor informar uma senha" })
  password: string

  @ApiProperty({ description: "Permissão do usuário", enum: ["admin", "client"] })
  @IsNotEmpty({ message: "Favor informar uma role de acesso" })
  roles: string
}

export class UserDataForTokenDto {
  id: number
  email: string
  roles: string
}
