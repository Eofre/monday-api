import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { EducationalBlocksModule } from "./educational-blocks/educational-blocks.module";
import { ConfigModule } from "@nestjs/config";
import { EducationalBlock } from "./educational-blocks/educational-blocks.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      models: [EducationalBlock],
      autoLoadModels: true,
    }),
    EducationalBlocksModule,
  ],
})
export class AppModule {}
