import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import process from 'node:process';
import { Case } from '../../packages/case/cases.entity';
import { Course } from '../../packages/course/course.entity';
import { Ecurie } from '../../packages/ecurie/ecuries.entity';
import { Leaderboard } from '../../packages/leaderboard/leaderboards.entity';
import { Map } from '../../packages/map/maps.entity';
import { Pilote } from '../../packages/pilote/pilotes.entity';
import { Podium } from '../../packages/podium/podiums.entity';
import { Voiture } from '../../packages/voiture/voitures.entity';
import { Poscase } from '../../packages/poscase/poscase.entity';

// CONST TEMPORAIRE AVANT D'AVOIR UN FICHIER DE CONF AYANT LES INFOS DEDANS
const defaultOptions = {
  host:'localhost',
  port:3306,
  username:'root',
  password:'',
  database:'nestgcapi',
  synchronize:true,
  logging:false,
  autoload:true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: defaultOptions.host,
      port: defaultOptions.port,
      username: defaultOptions.username,
      password: defaultOptions.password,
      database: defaultOptions.database,
      entities: [
        Case,
        Course,
        Ecurie,
        Leaderboard,
        Map,
        Pilote,
        Podium,
        Voiture,
        Poscase,
      ],
      synchronize: defaultOptions.synchronize,
      logging: defaultOptions.logging,
    }),
  ],
})
export class OrmModule {}