// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import {repository} from '@loopback/repository';
import {CoffeeShopRepository} from '../repositories';
import {CoffeeShop} from '../models';
import {get, post, param} from "@loopback/rest";

export class CoffeeShopController {
  constructor(
    @repository(CoffeeShopRepository) protected csRepo: CoffeeShopRepository,
  ) {}

  @get('/coffeeshop')
  async getCoffeeShops(): Promise<CoffeeShop[]>{
    return await this.csRepo.find();
  }
}
