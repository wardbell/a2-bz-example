import { EntityBase } from './EntityBase';
import { User } from './User';
import { Role } from './Role';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class UserRole extends EntityBase {

   /// <code> Place custom code between <code> tags
   
   /// </code>

   // Generated code. Do not place code below this line.
   id: number;
   userId: number;
   roleId: number;
   user: User;
   role: Role;
}

