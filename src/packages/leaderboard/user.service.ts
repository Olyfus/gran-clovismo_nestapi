import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { hashAndCompare, hasher } from "../../common/security/hash.security";
import { LoginDto } from "./dto/login.dto";
import { SignupDto } from "./dto/signup.dto";

import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { ExceptionFilter } from "../../common/security/exception.filter";
import { AuthSignUpDto } from "../../common/auth/DTO/authsignin.dto";
import { GetByCompanyDto } from "./dto/get.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByName(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({email});
  }

  async getAll() : Promise<User[] | null> {
    return this.userRepository.find();
  }

  async login(loginDto : LoginDto) : Promise<User | null> {
    var rsVal: boolean;
    var passwordEnc : string;
    await this.findByName(loginDto.email).then(value => passwordEnc = value.passwordEnc)
    await hashAndCompare(loginDto.password, passwordEnc).then(value => rsVal = value);

    if (rsVal){
      return await this.findByName(loginDto.email)
    }
    return null;
  }

  async createUser(signupDto : AuthSignUpDto) : Promise<User> {
    const user = new User();
    user.email = signupDto.email;
    await hasher(signupDto.password).then(enc => user.passwordEnc = enc);
    console.log(user);
    user.lastName = signupDto?.nom;
    user.firstName = signupDto?.prenom;
    user.companyName = signupDto?.company;
    user.lastName = signupDto?.nom;
    user.lastName = signupDto?.nom;
    return this.userRepository.save(user);
  }

  async getByCompany(dto : GetByCompanyDto) : Promise<User[] | null> {
    var list : Promise<User[] | null>;
    // check si la companie existe
    // check les users vérifier de cette
    return list;
  }

  async remove(id:string): Promise<void> {
    await this.userRepository.delete(id);
  }
}