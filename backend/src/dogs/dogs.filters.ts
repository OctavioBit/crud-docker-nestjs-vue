import { IsOptional, IsString, IsBooleanString, IsDateString } from 'class-validator';

export class DogsFilters {
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
    birthdate?: string;
}
