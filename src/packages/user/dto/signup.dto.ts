export class SignupDto {
  email:string;
  password: string;
  nom?: string;
  prenom?: string;
  valid: boolean = false;
}