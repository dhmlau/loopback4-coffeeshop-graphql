import {CoffeeShopApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {CoffeeShopApplication};

export async function main(options?: ApplicationConfig) {
  const app = new CoffeeShopApplication(options);
  await app.boot();
  await app.start();
  return app;
}
