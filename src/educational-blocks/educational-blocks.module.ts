import { Module } from "@nestjs/common";
import { EducationalBlocksService } from "./educational-blocks.service";
import { EducationalBlocksController } from "./educational-blocks.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { EducationalBlock } from "./educational-blocks.model";

@Module({
  providers: [EducationalBlocksService],
  controllers: [EducationalBlocksController],
  imports: [SequelizeModule.forFeature([EducationalBlock])],
})
export class EducationalBlocksModule {}
