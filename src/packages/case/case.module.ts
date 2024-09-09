import { Module } from '@nestjs/common';
import { UsersController } from "./case.controller";
import { UsersService } from "./case.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./case.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [
    UsersController,
  ],
  providers: [
    UsersService,
  ],
  exports: [
    UsersService,
  ]
})
export class CaseModule {

}
