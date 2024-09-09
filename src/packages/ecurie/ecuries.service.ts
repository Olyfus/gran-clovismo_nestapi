import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ecurie } from "./ecuries.entity";
import { Repository } from "typeorm";
import { CreateDto } from './dto/Create.dto';
import { DeleteDto } from './dto/Delete.dto';
import { UpdateDto } from './dto/Update.dto';
import { GetDto } from './dto/Get.dto';

@Injectable()
export class EcuriesService {
  constructor(
    @InjectRepository(Ecurie)
    private readonly caseRepository: Repository<Ecurie>,
  ) {}

  async getById(dto: GetDto): Promise<Ecurie | null> {
    var id = dto.case_id;
    return this.caseRepository.findOneBy({id});
  }

  async getAll() : Promise<Ecurie[] | null> {
    return this.caseRepository.find();
  }

  async createEcurie(dto : CreateDto) : Promise<Ecurie> {
    const case_j = new Ecurie();
    return this.caseRepository.save(case_j);
  }
  
  async update(dto: UpdateDto) {
    await this.caseRepository.update(dto.id, dto);
  }

  async remove(dto: DeleteDto): Promise<void> {
    await this.caseRepository.delete(dto.id);
  }
}