import { Module } from '@nestjs/common';
import { PodiumsController } from "./podiums.controller";
import { PodiumsService } from "./podiums.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Podium } from "./podiums.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Podium]),
  ],
  controllers: [
    PodiumsController,
  ],
  providers: [
    PodiumsService,
  ],
  exports: [
    PodiumsService,
  ]
})
export class PodiumsModule {

}
