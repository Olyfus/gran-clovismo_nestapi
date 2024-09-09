import { Module } from '@nestjs/common';
import { CasesController } from "./cases.controller";
import { CasesService } from "./cases.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Case } from "./cases.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Case]),
  ],
  controllers: [
    CasesController,
  ],
  providers: [
    CasesService,
  ],
  exports: [
    CasesService,
  ]
})
export class CasesModule {

}
