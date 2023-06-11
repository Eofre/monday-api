import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EducationalBlockModule } from "./educational-block/educational-block.module";
import { EducationalBlock } from "./educational-block/entities/educational-block.entity";
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';

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
    EducationalBlockModule,
    UserModule,
  ],
})
export class AppModule {}
