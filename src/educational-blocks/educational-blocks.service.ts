import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateEducationalBlockDto } from "src/dto/educational-block.dto";
import { EducationalBlock } from "./educational-blocks.model";

@Injectable()
export class EducationalBlocksService {
  constructor(
    @InjectModel(EducationalBlock)
    private educationalBlockRepository: typeof EducationalBlock
  ) {}

  async getAllEducationalBlocks() {
    const educationalBlocks = await this.educationalBlockRepository.findAll();
    return educationalBlocks;
  }

  async createEducationalBlock(dto: CreateEducationalBlockDto) {
    const educationalBlock = await this.educationalBlockRepository.create(dto);
    return educationalBlock;
  }
}
