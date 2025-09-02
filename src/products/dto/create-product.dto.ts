import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';


export class CreateProductDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  sizes?: string[];

  @IsIn(['men', 'women', 'kid', 'unisex'])
  @IsOptional()
  gender?: string;
}

export class CreateProductArrayDto {
  @ValidateNested({ each: true })
  @Type(() => CreateProductDto)
  products: CreateProductDto[];
}
