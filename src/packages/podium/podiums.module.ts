import { Module } from '@nestjs/common';
import { CasesController } from "./podiums.controller";
import { CasesService } from "./podiums.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Case } from "./podiums.entity";

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
export class PodiumsModule {

}
