import { Module } from '@nestjs/common';
import { CasesController } from "./pilotes.controller";
import { CasesService } from "./pilotes.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Case } from "./pilotes.entity";

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
export class PilotesModule {

}
