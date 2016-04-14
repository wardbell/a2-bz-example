import { EntityBase } from './EntityBase';
import { Supplier } from './Supplier';
import { Category } from './Category';

/// <code-import> Place custom imports between <code-import> tags

/// </code-import>

export class Product extends EntityBase {

   /// <code> Place custom code between <code> tags
   
   /// </code>

   // Generated code. Do not place code below this line.
   productID: number;
   rowVersion: number;
   productName: string;
   supplierID: number;
   categoryID: number;
   quantityPerUnit: string;
   unitPrice: number;
   unitsInStock: number;
   unitsOnOrder: number;
   reorderLevel: number;
   supplier: Supplier;
   category: Category;
}

