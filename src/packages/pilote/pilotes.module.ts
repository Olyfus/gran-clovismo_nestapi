import { Module } from '@nestjs/common';
import { PilotesController } from "./pilotes.controller";
import { PilotesService } from "./pilotes.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pilote } from "./pilotes.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Pilote]),
  ],
  controllers: [
    PilotesController,
  ],
  providers: [
    PilotesService,
  ],
  exports: [
    PilotesService,
  ]
})
export class PilotesModule {

}
