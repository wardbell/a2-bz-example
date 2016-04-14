import {Component} from 'angular2/core';
import { EntityManagerService } from './entity-manager.service';
import { Customer } from './entities/Customer';

@Component({
  selector: 'my-app',
  template: '<h1>My customer name is {{customer.companyName}}</h1>',
  providers: [EntityManagerService]
})
export class AppComponent {
  private _em: breeze.EntityManager;
  private customer: Customer;

  constructor(private _emService: EntityManagerService) {
    this._em = _emService.entityManager;

    this.customer = <Customer>this._em.createEntity('Customer', { customerID: 'ABC' });
    this.customer.companyName = 'Acme';
  }
}
