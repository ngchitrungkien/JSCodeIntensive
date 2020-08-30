import {Destination} from './Destination.js';

class Restaurant extends Destination {

    constructor(name,price) {
        super(name);
        this.price = price;
    }
}

export {Restaurant};