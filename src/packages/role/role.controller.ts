import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { RoleService } from "./role.service";
import { CreateRoleDto } from "./dto/createrole.dto";
import { Role } from "./role.entity";
import { UpdateRoleDto } from "./dto/updaterole.dto";

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {
  }

  @Post('create')
  async create(@Body() createDto : CreateRoleDto) {
    this.roleService.create(createDto);
  }

  @Get('/getall')
  async findAll(): Promise<Role[]> {
    return await this.roleService.getAll();
  }

  @Get('id')
  async findById(@Param('id') id: number): Promise<Role> {
    return await this.roleService.getById(id);
  }

  @Put('id')
  async update(@Param('id') id: number, @Body() updateDto: UpdateRoleDto) {
    return await this.roleService.update(updateDto, id);
  }

  @Delete('id')
  async remove(@Param('id') id: number) {
    return await this.roleService.remove(id);
  }
}
