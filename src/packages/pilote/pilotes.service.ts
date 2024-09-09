import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pilote } from "./pilotes.entity";
import { Repository } from "typeorm";
import { CreateDto } from './dto/Create.dto';
import { DeleteDto } from './dto/Delete.dto';
import { UpdateDto } from './dto/Update.dto';
import { GetDto } from './dto/Get.dto';

@Injectable()
export class PilotesService {
  constructor(
    @InjectRepository(Pilote)
    private readonly caseRepository: Repository<Pilote>,
  ) {}

  async getById(dto: GetDto): Promise<Pilote | null> {
    var id = dto.case_id;
    return this.caseRepository.findOneBy({id});
  }

  async getAll() : Promise<Pilote[] | null> {
    return this.caseRepository.find();
  }

  async createPilote(dto : CreateDto) : Promise<Pilote> {
    const case_j = new Pilote();
    return this.caseRepository.save(case_j);
  }
  
  async update(dto: UpdateDto) {
    await this.caseRepository.update(dto.id, dto);
  }

  async remove(dto: DeleteDto): Promise<void> {
    await this.caseRepository.delete(dto.id);
  }
}