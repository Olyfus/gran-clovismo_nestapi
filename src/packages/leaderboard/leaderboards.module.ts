import { Module } from '@nestjs/common';
import { CasesController } from "./leaderboards.controller";
import { CasesService } from "./leaderboards.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Case } from "./leaderboards.entity";

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
export class LeaderboardsModule {

}
