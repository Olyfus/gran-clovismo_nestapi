import { Module } from '@nestjs/common';
import { VoituresController } from "./voitures.controller";
import { VoituresService } from "./voitures.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Voiture } from "./voitures.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Voiture]),
  ],
  controllers: [
    VoituresController,
  ],
  providers: [
    VoituresService,
  ],
  exports: [
    VoituresService,
  ]
})
export class VoituresModule {

}
