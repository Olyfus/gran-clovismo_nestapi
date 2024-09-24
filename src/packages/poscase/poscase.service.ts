import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateDto } from './dto/create.dto';
import { DeleteDto } from './dto/delete.dto';
import { UpdateDto } from './dto/update.dto';
import { GetDto, GetPosDto, GetCaseDto } from './dto/get.dto';
import { Poscase } from './poscase.entity';

@Injectable()
export class PoscaseService {

  constructor(
    @InjectRepository(Poscase)
    private readonly caseRepository: Repository<Poscase>,
  ) {}

  async getByCaseId(dto: GetCaseDto): Promise<Poscase[] | null> {
    var id = dto.case_id;
    return this.caseRepository.findBy({case_id : id});
  }

  async getByPosId(dto: GetPosDto): Promise<Poscase[] | null> {
    var id = dto.pos_id;
    return this.caseRepository.findBy({pos_id :id});
  }
  async getByBothId(dto: GetDto): Promise<Poscase | null> {
    var case_id = dto.case_id;
    var pos_id = dto.pos_id;
    return this.caseRepository.findOneBy({case_id: case_id, pos_id: pos_id});
  }

  async getAll() : Promise<Poscase[] | null> {
    return this.caseRepository.find();
  }

  async createCase(dto : CreateDto) : Promise<Poscase> {
    const case_j = new Poscase();
    return this.caseRepository.save(case_j);
  }

  async update(dto: UpdateDto) {
    var new_poscase = new Poscase();
    new_poscase.pos_id = dto.new_p_id;
    new_poscase.case_id = dto.new_c_id;
    var getDto = new GetDto();
    getDto.pos_id = dto.old_p_id; getDto.case_id = dto.old_c_id;
    var old_poscase: Poscase = await this.getByBothId(getDto);
    await this.caseRepository.update(old_poscase, new_poscase);
  }

  async remove(dto: DeleteDto): Promise<void> {
    var getDto = new GetDto(); getDto.pos_id = dto.pos_id; getDto.case_id = dto.case_id;
    var poscase: Poscase = await this.getByBothId(getDto);
    await this.caseRepository.delete(poscase);
  }
}
