import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDecimal, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateProductDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsDecimal()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    code: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    providerId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    productTypeId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}
