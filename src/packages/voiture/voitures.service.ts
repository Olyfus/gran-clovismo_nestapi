import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Voiture } from "./voitures.entity";
import { Repository } from "typeorm";
import { CreateDto } from './dto/Create.dto';
import { DeleteDto } from './dto/Delete.dto';
import { UpdateDto } from './dto/Update.dto';
import { GetDto } from './dto/Get.dto';

@Injectable()
export class VoituresService {
  constructor(
    @InjectRepository(Voiture)
    private readonly caseRepository: Repository<Voiture>,
  ) {}

  async getById(dto: GetDto): Promise<Voiture | null> {
    var id = dto.case_id;
    return this.caseRepository.findOneBy({id});
  }

  async getAll() : Promise<Voiture[] | null> {
    return this.caseRepository.find();
  }

  async createVoiture(dto : CreateDto) : Promise<Voiture> {
    const case_j = new Voiture();
    return this.caseRepository.save(case_j);
  }
  
  async update(dto: UpdateDto) {
    await this.caseRepository.update(dto.id, dto);
  }

  async remove(dto: DeleteDto): Promise<void> {
    await this.caseRepository.delete(dto.id);
  }
}