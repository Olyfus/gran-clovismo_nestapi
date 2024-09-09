import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Case } from "./voitures.entity";
import { Repository } from "typeorm";
import { CreateDto } from './dto/Create.dto';
import { DeleteDto } from './dto/Delete.dto';
import { UpdateDto } from './dto/Update.dto';
import { GetDto } from './dto/Get.dto';

@Injectable()
export class CasesService {
  constructor(
    @InjectRepository(Case)
    private readonly caseRepository: Repository<Case>,
  ) {}

  async getById(dto: GetDto): Promise<Case | null> {
    var id = dto.case_id;
    return this.caseRepository.findOneBy({id});
  }

  async getAll() : Promise<Case[] | null> {
    return this.caseRepository.find();
  }

  async createCase(dto : CreateDto) : Promise<Case> {
    const case_j = new Case();
    return this.caseRepository.save(case_j);
  }
  
  async update(dto: UpdateDto) {
    await this.caseRepository.update(dto.id, dto);
  }

  async remove(dto: DeleteDto): Promise<void> {
    await this.caseRepository.delete(dto.id);
  }
}