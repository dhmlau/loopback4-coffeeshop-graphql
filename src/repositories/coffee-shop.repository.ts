import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CoffeeShop} from '../models';
import {inject} from '@loopback/core';

export class CoffeeShopRepository extends DefaultCrudRepository<
CoffeeShop,
  typeof CoffeeShop.prototype.id
> {
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
  ) {
    super(CoffeeShop, datasource);
  }
}