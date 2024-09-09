export class AuthSignInDto {
  mail:string;
  pass:string;
}

export class AuthSignUpDto {
  email:string;
  password: string;
  nom?: string;
  prenom?: string;
  username?: string;
}