import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OrmModule } from './common/modules/orm.module';
import { AuthModule } from './common/auth/auth.module';
import { UserModule } from './packages/user/user.module';
import { RoleModule } from './packages/role/role.module';
import { CasesModule } from './packages/case/cases.module';
import { CourseModule } from './packages/course/course.module';
import { EcurieModule } from './packages/ecurie/ecuries.module';
import { LeaderboardsModule } from './packages/leaderboard/leaderboards.module';
import { MapsModule } from './packages/map/maps.module';
import { PilotesModule } from './packages/pilote/pilotes.module';
import { PodiumsModule } from './packages/podium/podiums.module';
import { VoituresModule } from './packages/voiture/voitures.module';
import { PoscaseModule } from './packages/poscase/poscase.module';

@Module({
  imports: [
    //ConfigModule.forRoot({
    //  envFilePath: '.common.env.env',
    //  isGlobal: true,
    //}),
    OrmModule,
    AuthModule,
    UserModule,
    RoleModule,
    CasesModule,
    CourseModule,
    EcurieModule,
    LeaderboardsModule,
    MapsModule,
    PilotesModule,
    PodiumsModule,
    VoituresModule,
    PoscaseModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
