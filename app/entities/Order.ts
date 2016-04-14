import { EntityBase } from './EntityBase';
import { Customer } from './Customer';
import { Employee } from './Employee';
import { InternationalOrder } from './InternationalOrder';
import { OrderDetail } from './OrderDetail';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Order extends EntityBase {

   /// <code> Place custom code between <code> tags
   
   /// </code>

   // Generated code. Do not place code below this line.
   orderID: number;
   rowVersion: number;
   customerID: string;
   employeeID: number;
   orderDate: Date;
   requiredDate: Date;
   shippedDate: Date;
   freight: number;
   shipName: string;
   shipAddress: string;
   shipCity: string;
   shipRegion: string;
   shipPostalCode: string;
   shipCountry: string;
   customer: Customer;
   employee: Employee;
   internationalOrder: InternationalOrder;
   orderDetails: OrderDetail[];
}

