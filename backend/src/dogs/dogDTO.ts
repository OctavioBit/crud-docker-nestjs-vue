import { IsString, IsNotEmpty, IsOptional, IsInt, IsBoolean, IsDate, Max } from 'class-validator';

export class DogDTO {

  @IsOptional()
  @IsInt()
  id: number

  @IsString()
  @IsNotEmpty()
  name: string;

  @Max(1)
  @IsString()
  sex: string;

  @IsBoolean()  
  sterilized: boolean;

  @IsDate()
  birthdate: Date
}
