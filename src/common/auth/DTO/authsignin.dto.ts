export class AuthSignInDto {
  mail:string;
  pass:any;
}

export class AuthSignUpDto {
  email:string;
  password: string;
  nom?: string;
  prenom?: string;
  company?: string;
  domaine?: string;
  type?: string;
  valid: boolean = false;
}