import { Module } from '@nestjs/common';
import { CasesController } from "./voitures.controller";
import { CasesService } from "./voitures.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Case } from "./voitures.entity";

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
export class VoituresModule {

}
