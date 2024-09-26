export class AuthSignInDto {
  id:number;
  username:string;
}

export class AuthSignUpDto {
  email:string;
  password: string;
  nom?: string;
  prenom?: string;
}