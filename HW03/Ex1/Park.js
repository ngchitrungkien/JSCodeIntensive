import {Destination} from './Destination.js';

class Park extends Destination {

    constructor(name,price) {
        super(name);
        this.price = price;
    }
}

export {Park};