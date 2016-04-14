import { EntityBase } from './EntityBase';
import { EmployeeTerritory } from './EmployeeTerritory';
import { Order } from './Order';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Employee extends EntityBase {

   /// <code> Place custom code between <code> tags
   
   /// </code>

   // Generated code. Do not place code below this line.
   employeeID: number;
   rowVersion: number;
   lastName: string;
   firstName: string;
   title: string;
   titleOfCourtesy: string;
   birthDate: Date;
   hireDate: Date;
   address: string;
   city: string;
   region: string;
   postalCode: string;
   country: string;
   homePhone: string;
   extension: string;
   photo: any;
   notes: string;
   photoPath: string;
   reportsToEmployeeID: number;
   fullName: string;
   manager: Employee;
   directReports: Employee[];
   employeeTerritories: EmployeeTerritory[];
   orders: Order[];
}

