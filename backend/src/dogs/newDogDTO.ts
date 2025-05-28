import { IsString, IsNotEmpty, IsOptional, IsInt, IsBoolean, IsDate, Min, Max } from 'class-validator';

export class NewDogDTO {
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
