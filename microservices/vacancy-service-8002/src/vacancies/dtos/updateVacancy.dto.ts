import { IsString, IsDateString } from 'class-validator';
export class UpdateVacancyDto {
  @IsString()
  vacancyId: string;

  @IsString()
  companyId: string;

  @IsString()
  title: string;

  @IsString()
  description: number;

  @IsDateString()
  expireAt: string;
}
