import { IsBoolean, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @MinLength(3)
  @MaxLength(225)
  @IsString()
  name: string

  @IsBoolean()
  @IsOptional()
  is_profitable?: boolean
}
