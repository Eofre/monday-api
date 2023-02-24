import { Module } from "@nestjs/common";
import { EducationalBlockService } from "./educational-block.service";
import { EducationalBlockController } from "./educational-block.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { EducationalBlock } from "./entities/educational-block.entity";

@Module({
  controllers: [EducationalBlockController],
  providers: [EducationalBlockService],
  imports: [SequelizeModule.forFeature([EducationalBlock])],
})
export class EducationalBlockModule {}
