import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./user.service";
import { SignupDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";
import { User } from './user.entity';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post('/register')
  async signup(@Body() signUpDto: SignupDto){
    await this.usersService.createUser(signUpDto);
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    console.log(loginDto.email)
    console.log(loginDto.password)
    return await this.usersService.login(loginDto);
  }

  @Get('/getall')
  async getAll(): Promise<User[]> {
    return await this.usersService.getAll();
  }


//   @Put() async put(@Body() updateDto : UpdateUserDto) {return await this.usersService.update(updateDto)}
}