import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PoscaseService } from './poscase.service';
import { CreateDto } from './dto/Create.dto';
import { UpdateDto } from './dto/Update.dto';
import { DeleteDto } from './dto/Delete.dto';
import { GetDto, GetCaseDto, GetPosDto } from './dto/get.dto';

@Controller('poscase')
export class PoscaseController {
  constructor(private poscasesService: PoscaseService) {
  }

  @Post('/create')
  async create(@Body() dto: CreateDto){
    await this.poscasesService.createCase(dto);
  }

  @Get('/getbycase')
  async getByCase(@Body() dto: GetCaseDto) {
    return await this.poscasesService.getByCaseId(dto);
  }

  @Get('/getbypos')
  async getByPos(@Body() dto: GetPosDto) {
    return await this.poscasesService.getByPosId(dto);
  }

  @Get('/getbyboth')
  async getByBoth(@Body() dto: GetDto) {
    return await this.poscasesService.getByBothId(dto);
  }

  @Get('/getall')
  async getAll() {
    return await this.poscasesService.getAll();
  }

  @Put('/update')
  async update(@Body() dto : UpdateDto) {
    return await this.poscasesService.update(dto);
  }

  @Delete('/delete')
  async delete(@Body() dto : DeleteDto) {
    return await this.poscasesService.remove(dto);
  }
}
