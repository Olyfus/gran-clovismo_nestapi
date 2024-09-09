import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { hashAndCompare, hasher } from "../../common/security/hash.security";
import { LoginDto } from "./dto/login.dto";
import { SignupDto } from "./dto/signup.dto";

import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { ExceptionFilter } from "../../common/security/exception.filter";
import { AuthSignInDto, AuthSignUpDto } from '../../common/auth/DTO/authsignin.dto';
import { GetByCompanyDto } from "./dto/get.dto";
import { AuthService } from '../../common/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService : AuthService,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({email});
  }

  async getAll() : Promise<User[] | null> {
    return this.userRepository.find();
  }

  async login(loginDto : LoginDto) : Promise<{  access_token : string } | HttpException> {
    var rsVal: boolean;
    var passwordEnc : string;
    var dto : AuthSignInDto = new AuthSignInDto();
    await this.findByEmail(loginDto.email).then(value => passwordEnc = value.passwordEnc)
    await hashAndCompare(loginDto.password, passwordEnc).then(value => rsVal = value);

    if (rsVal){
      dto.mail = loginDto.email;
      dto.pass = loginDto.password;
    }
    return await this.authService.signIn(dto);
  }

  async createUser(signupDto : AuthSignUpDto) : Promise<User> {
    const user = new User();
    user.email = signupDto.email;
    await hasher(signupDto.password).then(enc => user.passwordEnc = enc);
    console.log(user);
    user.lastName = signupDto?.nom;
    user.firstName = signupDto?.prenom;
    user.username = signupDto?.username;
    return this.userRepository.save(user);
  }

  async remove(id:string): Promise<void> {
    await this.userRepository.delete(id);
  }
}