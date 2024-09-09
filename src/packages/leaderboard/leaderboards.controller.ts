import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { LeaderboardsService } from "./leaderboards.service";
import { CreateDto } from './dto/Create.dto';
import { DeleteDto } from './dto/Delete.dto';
import { UpdateDto } from './dto/Update.dto';
import { GetDto } from './dto/Get.dto';

@Controller('case')
export class LeaderboardsController {
  constructor(private casesService: LeaderboardsService) {
  }

  @Post('/create')
  async create(@Body() dto: CreateDto){
    await this.casesService.createLeaderboard(dto);
  }

  @Get('/get')
  async get(@Body() dto: GetDto) {
    return await this.casesService.getById(dto);
  }

  @Get('/getall')
  async getAll() {
    return await this.casesService.getAll();
  }

  @Put('/update')
  async update(@Body() dto : UpdateDto) {
    return await this.casesService.update(dto);
  }

  @Delete('/delete')
  async delete(@Body() dto : DeleteDto) {
    return await this.casesService.remove(dto);
  }
}