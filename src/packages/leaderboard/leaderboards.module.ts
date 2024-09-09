import { Module } from '@nestjs/common';
import { LeaderboardsController } from "./leaderboards.controller";
import { LeaderboardsService } from "./leaderboards.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Leaderboard } from "./leaderboards.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Leaderboard]),
  ],
  controllers: [
    LeaderboardsController,
  ],
  providers: [
    LeaderboardsService,
  ],
  exports: [
    LeaderboardsService,
  ]
})
export class LeaderboardsModule {

}
