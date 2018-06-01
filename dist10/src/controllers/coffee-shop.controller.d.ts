import { CoffeeShopRepository } from '../repositories';
import { CoffeeShop } from '../models';
export declare class CoffeeShopController {
    protected csRepo: CoffeeShopRepository;
    constructor(csRepo: CoffeeShopRepository);
    getCoffeeShops(): Promise<CoffeeShop[]>;
}
