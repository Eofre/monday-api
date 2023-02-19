import { Controller, Post, Body, Get } from "@nestjs/common";
import { CreateEducationalBlockDto } from "src/dto/educational-block.dto";
import { EducationalBlocksService } from "./educational-blocks.service";

@Controller("educational-blocks")
export class EducationalBlocksController {
  constructor(private educationalBlocksService: EducationalBlocksService) {}

  @Post()
  create(@Body() educationalBlockDto: CreateEducationalBlockDto) {
    return this.educationalBlocksService.createEducationalBlock(
      educationalBlockDto
    );
  }

  @Get()
  getAll() {
    return this.educationalBlocksService.getAllEducationalBlocks();
  }
}
