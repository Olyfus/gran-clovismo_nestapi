import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Role } from "./role.entity";
import { CreateRoleDto } from "./dto/createrole.dto";
import { UpdateRoleDto } from "./dto/updaterole.dto";

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly repository: Repository<Role>,
  ) {
  }

  async getById(id: number): Promise<Role | null> {
    return this.repository.findOneBy({ id });
  }

  async getAll(): Promise<Role[] | null> {
    return this.repository.find();
  }

  async create(createDto: CreateRoleDto) {
    const obj = new Role();
    obj.name = createDto.name;
    obj.description = createDto.description;
    obj.dateCreated = new Date();
    return this.repository.save(obj);
  }

  async update(updateDto: UpdateRoleDto, id: number) {
    return await this.repository.update(id, updateDto);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}