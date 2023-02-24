import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationalBlockDto } from './create-educational-block.dto';

export class UpdateEducationalBlockDto extends PartialType(CreateEducationalBlockDto) {}
