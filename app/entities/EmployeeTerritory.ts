import { EntityBase } from './EntityBase';
import { Employee } from './Employee';
import { Territory } from './Territory';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class EmployeeTerritory extends EntityBase {

   /// <code> Place custom code between <code> tags
   
   /// </code>

   // Generated code. Do not place code below this line.
   id: number;
   rowVersion: number;
   employeeID: number;
   territoryID: number;
   employee: Employee;
   territory: Territory;
}

