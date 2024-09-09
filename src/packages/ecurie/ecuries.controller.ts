import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { EcuriesService } from "./ecuries.service";
import { CreateDto } from './dto/Create.dto';
import { DeleteDto } from './dto/Delete.dto';
import { UpdateDto } from './dto/Update.dto';
import { GetDto } from './dto/Get.dto';

@Controller('ecurie')
export class EcuriesController {
  constructor(private ecuriesService: EcuriesService) {
  }

  @Post('/create')
  async create(@Body() dto: CreateDto){
    await this.ecuriesService.createEcurie(dto);
  }

  @Get('/get')
  async get(@Body() dto: GetDto) {
    return await this.ecuriesService.getById(dto);
  }

  @Get('/getall')
  async getAll() {
    return await this.ecuriesService.getAll();
  }

  @Put('/update')
  async update(@Body() dto : UpdateDto) {
    return await this.ecuriesService.update(dto);
  }

  @Delete('/delete')
  async delete(@Body() dto : DeleteDto) {
    return await this.ecuriesService.remove(dto);
  }
}