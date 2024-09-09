
import { Company } from '../company/company.entity';
import { Role } from '../role/role.entity';

export interface IUser {
  id:number;
  aboutMe?:string;
  creationMe?:string;
  // deviceLoggedIds?:string;
  email:string;
  emailValidated?:boolean;
  // emailValidationGuid?:string;
  firstName: string;
  languageUsed?:number;
  lastName:string;
  password:string;
  phoneNumber?:string;
  pictureKey?:string;
  tagNumber?:number;
  username:string;
  role?:Role;
  company?:Company;
  companyName?: string;
  companyAddress?:string;
  companyPostalCode?:string;
  companyCity?:string;
  dateCreated:Date;
  notifyOnDocumentValidation?: boolean;
  companyId?:number;
  isCompanyAdmin?:boolean;
  canAccessCompanyProjects?:boolean;
  canCreateProject?:boolean;
}