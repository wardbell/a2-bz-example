import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { EntityManagerService } from './entity-manager.service';
import { MetadataStoreService } from './metadata-store.service';
import { NorthwindService } from './northwind.service';

import { Customer } from './entities';
import { Angular2Bridge } from '../breeze/angular2-bridge';

@Component({
  selector: 'my-app',
  template: `
    <h1>My new customer name is {{customer.companyName}}</h1>
    <p><i>
      Customers in the db: {{customers?.length}}; in cache: {{numInCache}}
    </i></p>
    <div *ngFor="#cust of customers">{{cust.companyName}}</div>
  `,
  providers: [
    Angular2Bridge,
    EntityManagerService,
    HTTP_PROVIDERS,
    MetadataStoreService,
    NorthwindService,
  ]
})
export class AppComponent {
  private _em: breeze.EntityManager;
  private customer: Customer;
  customers: Customer[];
  numInCache: number;

  constructor(
    private _emService: EntityManagerService,
    nwService: NorthwindService,
    bridge: Angular2Bridge) {

    this._em = _emService.entityManager;
    this.customer = <Customer>this._em.createEntity('Customer', { customerID: 'ABC' });
    this.customer.companyName = 'Acme';

    nwService.getAllCustomers().then(custs => {
      this.customers = custs;
      // To validate that they are really in cache
      this.numInCache =  this._em.getEntities('Customer').length;
    });
  }
}
