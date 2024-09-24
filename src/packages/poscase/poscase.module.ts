import { Module } from '@nestjs/common';
import { PoscaseController } from './poscase.controller';
import { PoscaseService } from './poscase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poscase } from './poscase.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Poscase]),
  ],
  controllers: [
    PoscaseController,
  ],
  providers: [
    PoscaseService,
  ],
  exports: [
    PoscaseService,
  ]
})
export class PoscaseModule {}
