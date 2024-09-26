import { Body, Controller, Get, HttpCode, HttpStatus, Request, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthSignInDto, AuthSignUpDto } from "./DTO/authsignin.dto";
import { AuthGuard } from "./auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() dto : AuthSignInDto) {
    return this.service.SignIn(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() dto : AuthSignUpDto) {
    return this.service.signUp(dto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
