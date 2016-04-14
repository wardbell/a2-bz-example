import { Location } from './Location';
import { Customer } from './Customer';
import { Supplier } from './Supplier';
import { User } from './User';
import { Product } from './Product';
import { Employee } from './Employee';
import { EmployeeTerritory } from './EmployeeTerritory';
import { Region } from './Region';
import { NextId } from './NextId';
import { Order } from './Order';
import { UserRole } from './UserRole';
import { Territory } from './Territory';
import { InternationalOrder } from './InternationalOrder';
import { OrderDetail } from './OrderDetail';
import { Role } from './Role';
import { Category } from './Category';

export class _RegistrationHelper {

    static register(metadataStore: breeze.MetadataStore) {
        metadataStore.registerEntityTypeCtor('Location', Location);
        metadataStore.registerEntityTypeCtor('Customer', Customer);
        metadataStore.registerEntityTypeCtor('Supplier', Supplier);
        metadataStore.registerEntityTypeCtor('User', User);
        metadataStore.registerEntityTypeCtor('Product', Product);
        metadataStore.registerEntityTypeCtor('Employee', Employee);
        metadataStore.registerEntityTypeCtor('EmployeeTerritory', EmployeeTerritory);
        metadataStore.registerEntityTypeCtor('Region', Region);
        metadataStore.registerEntityTypeCtor('NextId', NextId);
        metadataStore.registerEntityTypeCtor('Order', Order);
        metadataStore.registerEntityTypeCtor('UserRole', UserRole);
        metadataStore.registerEntityTypeCtor('Territory', Territory);
        metadataStore.registerEntityTypeCtor('InternationalOrder', InternationalOrder);
        metadataStore.registerEntityTypeCtor('OrderDetail', OrderDetail);
        metadataStore.registerEntityTypeCtor('Role', Role);
        metadataStore.registerEntityTypeCtor('Category', Category);
    }
}
