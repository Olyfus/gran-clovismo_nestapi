import { Module } from '@nestjs/common';
import { CasesController } from "./maps.controller";
import { CasesService } from "./maps.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Case } from "./maps.entity";

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
export class MapsModule {

}
