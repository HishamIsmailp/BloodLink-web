 export type DonerFromInputs = {
   firstName?:string;
   lastName?:string;
   phoneNumber?:string;
   email?:string;
   address?:string;
   age?:number;
   BloodGroup?:string;
   district?:string;
   state?:string;
   pinCode?:number;
   lastDonationDate?:string;
  }

  export type OrgFromInputs = {
    orgName:string;
    address?:string;
    headOfOrg?:string;
    phoneNumber?:number;
  }