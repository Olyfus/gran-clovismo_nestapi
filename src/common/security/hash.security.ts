import * as bcrypt from 'bcrypt';

// export type TempUser = {id:number,username:string,password:string};
export function hasher(toHash: string) {
  //console.log('To hash '+ toHash)
  const saltRounds : number = 10;
  console.log(bcrypt.hash(toHash, saltRounds));
  return bcrypt.hash(toHash, saltRounds);
}

export async function hashAndCompare(wantToCompare: string, passwordEnc:string) : Promise<boolean> {
  var isMatch = await bcrypt.compare(wantToCompare, passwordEnc);
  if (isMatch) {
    return true;
  }
  return false;
}