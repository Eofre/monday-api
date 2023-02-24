import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateEducationalBlockDto } from "./dto/create-educational-block.dto";
import { UpdateEducationalBlockDto } from "./dto/update-educational-block.dto";
import { EducationalBlock } from "./entities/educational-block.entity";

@Injectable()
export class EducationalBlockService {
  constructor(
    @InjectModel(EducationalBlock)
    private educationalBlockRepository: typeof EducationalBlock
  ) {}

  async create(createEducationalBlockDto: CreateEducationalBlockDto) {
    const educationalBlock = await this.educationalBlockRepository.create(
      createEducationalBlockDto
    );
    return educationalBlock;
  }

  async findAll() {
    const educationalBlocks = await this.educationalBlockRepository.findAll();
    return educationalBlocks;
  }

  async findOne(id: number) {
    const educationalBlock = await this.educationalBlockRepository.findOne({
      where: {
        id,
      },
    });
    return educationalBlock;
  }

  update(id: number, updateEducationalBlockDto: UpdateEducationalBlockDto) {
    return `This action updates a #${id} educationalBlock`;
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
