import { Role } from "../../role/role.entity";

export class UpdateUserDto {
  aboutMe?:string;
  firstName: string;
  languageUsed?:number;
  lastName:string;
  phoneNumber?:string;
  pictureKey?:string;
  tagNumber?:number;
  username:string;
  notifyOnDocumentValidation?: boolean;
  companyId?:number;
  isCompanyAdmin?:boolean;
  canAccessCompanyProjects?:boolean;
  canCreateProject?:boolean;
}