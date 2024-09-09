import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Podium } from "./podiums.entity";
import { Repository } from "typeorm";
import { CreateDto } from './dto/Create.dto';
import { DeleteDto } from './dto/Delete.dto';
import { UpdateDto } from './dto/Update.dto';
import { GetDto } from './dto/Get.dto';

@Injectable()
export class PodiumsService {
  constructor(
    @InjectRepository(Podium)
    private readonly caseRepository: Repository<Podium>,
  ) {}

  async getById(dto: GetDto): Promise<Podium | null> {
    var id = dto.case_id;
    return this.caseRepository.findOneBy({id});
  }

  async getAll() : Promise<Podium[] | null> {
    return this.caseRepository.find();
  }

  async createPodium(dto : CreateDto) : Promise<Podium> {
    const case_j = new Podium();
    return this.caseRepository.save(case_j);
  }
  
  async update(dto: UpdateDto) {
    await this.caseRepository.update(dto.id, dto);
  }

  async remove(dto: DeleteDto): Promise<void> {
    await this.caseRepository.delete(dto.id);
  }
}