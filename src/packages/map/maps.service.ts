import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Map } from "./maps.entity";
import { Repository } from "typeorm";
import { CreateDto } from './dto/Create.dto';
import { DeleteDto } from './dto/Delete.dto';
import { UpdateDto } from './dto/Update.dto';
import { GetDto } from './dto/Get.dto';

@Injectable()
export class MapsService {
  constructor(
    @InjectRepository(Map)
    private readonly caseRepository: Repository<Map>,
  ) {}

  async getById(dto: GetDto): Promise<Map | null> {
    var id = dto.case_id;
    return this.caseRepository.findOneBy({id});
  }

  async getAll() : Promise<Map[] | null> {
    return this.caseRepository.find();
  }

  async createMap(dto : CreateDto) : Promise<Map> {
    const case_j = new Map();
    return this.caseRepository.save(case_j);
  }
  
  async update(dto: UpdateDto) {
    await this.caseRepository.update(dto.id, dto);
  }

  async remove(dto: DeleteDto): Promise<void> {
    await this.caseRepository.delete(dto.id);
  }
}