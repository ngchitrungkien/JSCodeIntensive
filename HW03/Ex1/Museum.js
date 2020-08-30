import {Destination} from './Destination.js';

class Museum extends Destination {

    constructor(name,price) {
        super(name);
        this.price = price;
    }
}

export {Museum};