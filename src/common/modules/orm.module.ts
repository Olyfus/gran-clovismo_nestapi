import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import process from 'node:process';

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
      host: process.env.DATABASE_URL,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
      ],
      synchronize: true,
      logging: false,
    }),
  ],
})
export class OrmModule {}