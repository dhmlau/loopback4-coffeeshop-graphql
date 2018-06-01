import { Entity } from '@loopback/repository';
export declare class CoffeeShop extends Entity {
    id: number;
    city: string;
    capacity: number;
    getId(): number;
}
