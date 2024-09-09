import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../../packages/user/user.service";
import { hasher } from "../security/hash.security";
import { JwtService } from "@nestjs/jwt";
import { AuthSignUpDto } from "./DTO/authsignin.dto";


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(mail: string, pass: string): Promise<{  access_token : string }> {
    const user = await this.usersService.findByName(mail);
    await hasher(pass).then(passEnc => {
      console.log("Passward " + passEnc +
        "\nPassword " + user?.passwordEnc);
      if( user?.passwordEnc !== passEnc) {
        console.log("fu");
        throw new UnauthorizedException();
      }
      if (user.emailValidated == false) {
        console.log("user not authorized");
        throw new UnauthorizedException();
      }
    })
    const payload  = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(dto: AuthSignUpDto): Promise<{rs_code : number, rs_string : string}> {
    // Le mail est catégoriser en unique dans
    const user = await this.usersService.findByName(dto.email);
    var rs = {rs_code : 500, rs_string : "Unsupported action, in signUp"};
    if (user != null) {
      rs = {rs_code: 500, rs_string:"Mail already in use"};
    }
    else {
      await this.usersService.createUser(dto);
    }
    return rs;
  }
}
