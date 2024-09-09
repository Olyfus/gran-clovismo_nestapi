import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./user.service";
import { SignupDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";
import { GetByCompanyDto } from "./dto/get.dto";

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post()
  async signup(@Body() signUpDto: SignupDto){
    await this.usersService.createUser(signUpDto);
  }

  @Get('/login')
  async login(@Body() loginDto: LoginDto) {
    return await this.usersService.login(loginDto);
  }

  @Get('/getall')
  async getAll() {
    return await this.usersService.getAll();
  }

  @Get('/getUsersByCompany')
  async getByCompany(@Body() dto: GetByCompanyDto) {
    return await this.usersService.getByCompany(dto);
  }

//   @Put() async put(@Body() updateDto : UpdateUserDto) {return await this.usersService.update(updateDto)}
}