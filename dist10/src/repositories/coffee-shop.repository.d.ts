import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { CoffeeShop } from '../models';
export declare class CoffeeShopRepository extends DefaultCrudRepository<CoffeeShop, typeof CoffeeShop.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
