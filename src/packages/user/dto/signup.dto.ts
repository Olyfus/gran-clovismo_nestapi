export class SignupDto {
  email:string;
  password: string;
  nom?: string;
  prenom?: string;
  company?: string;
  domaine?: string;
  type?: string;
  valid: boolean = false;
}