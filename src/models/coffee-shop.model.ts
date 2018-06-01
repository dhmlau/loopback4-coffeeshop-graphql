import {Entity, property, model} from '@loopback/repository';
@model()
export class CoffeeShop extends Entity {
    @property({
        id: true,
    })
    id: number;

    @property({
        required: true,
    })
    city: string;

    @property({
        required: false,
    })
    capacity: number;

    getId() {
        return this.id;
    }
}