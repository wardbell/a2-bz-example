import { EntityBase } from './EntityBase';
import { UserRole } from './UserRole';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class User extends EntityBase {

   /// <code> Place custom code between <code> tags
   
   /// </code>

   // Generated code. Do not place code below this line.
   id: number;
   rowVersion: number;
   userName: string;
   userPassword: string;
   firstName: string;
   lastName: string;
   email: string;
   createdBy: string;
   createdByUserId: number;
   createdDate: Date;
   modifiedBy: string;
   modifiedByUserId: number;
   modifiedDate: Date;
   userRoles: UserRole[];
}

