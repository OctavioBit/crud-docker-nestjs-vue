import { IsOptional, IsString, IsBooleanString, IsDateString } from 'class-validator';

export class DogFilters {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    sex?: string;

    @IsOptional()
    @IsBooleanString()
    sterilized?: string; 

    @IsOptional()
    @IsDateString()
    birthdateFrom?: string;

    @IsOptional()
    @IsDateString()
    birthdateTo?: string;
}
