import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { hashAndCompare, hasher } from "../../common/security/hash.security";
import { LoginDto } from "./dto/login.dto";

import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { AuthSignInDto, AuthSignUpDto } from '../../common/auth/DTO/authsignin.dto';
import { AuthService } from '../../common/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({email});
  }

  async getAll() : Promise<User[] | null> {
    return this.userRepository.find();
  }

  async login(loginDto : LoginDto) : Promise<{  access_token : string } | HttpException> {

    var rs_if_match: boolean;
    var stored_user = {
      id:0,
      email: '',
      passwordEnc: '',
      username: '',
    };
    var dto : AuthSignInDto = new AuthSignInDto();
    console.log('1')
    await this.findByEmail(loginDto.email).then(bddUser => stored_user.passwordEnc = bddUser.passwordEnc, bddUser => stored_user.email = bddUser.email)
    console.log('2')
    await hashAndCompare(loginDto.password, stored_user.passwordEnc).then(value => rs_if_match = value);
    //await hasher(loginDto.password).then(value => loginDto.password = value);
    console.log('3')

    console.log('Are same password ? : ' + rs_if_match)
    //if (stored_user.passwordEnc == loginDto.password){
    if (rs_if_match){
      console.log('4')
      dto.id = stored_user.id;
      dto.username = stored_user.username;
    }
    console.log('5')
    return await this.authService.SignIn(dto);
  }

  async createUser(signupDto : AuthSignUpDto) : Promise<User> {

    const user = new User();
    user.email = signupDto.email;
    await hasher(signupDto.password).then(enc => user.passwordEnc = enc);

    user.lastName = signupDto?.nom;
    user.firstName = signupDto?.prenom;
    user.dateCreated = new Date;
    user.validated = false;
    return this.userRepository.save(user);
  }

  async remove(id:string): Promise<void> {
    await this.userRepository.delete(id);
  }
}