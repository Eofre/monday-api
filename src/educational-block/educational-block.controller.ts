import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EducationalBlockService } from './educational-block.service';
import { CreateEducationalBlockDto } from './dto/create-educational-block.dto';
import { UpdateEducationalBlockDto } from './dto/update-educational-block.dto';

@Controller('educational-block')
export class EducationalBlockController {
  constructor(private readonly educationalBlockService: EducationalBlockService) {}

  @Post()
  create(@Body() createEducationalBlockDto: CreateEducationalBlockDto) {
    return this.educationalBlockService.create(createEducationalBlockDto);
  }

  @Get()
  findAll() {
    return this.educationalBlockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationalBlockService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEducationalBlockDto: UpdateEducationalBlockDto) {
    return this.educationalBlockService.update(+id, updateEducationalBlockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationalBlockService.remove(+id);
  }
}
