import { Module } from '@nestjs/common';
import { EcuriesController } from "./ecuries.controller";
import { EcuriesService } from "./ecuries.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ecurie } from "./ecuries.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Ecurie]),
  ],
  controllers: [
    EcuriesController,
  ],
  providers: [
    EcuriesService,
  ],
  exports: [
    EcuriesService,
  ]
})
export class EcurieModule {

}
