import {Person} from "./Person.js"

class Teachers extends Person {
    level;

    constructor (name,gender,level) {
        super(name, gender);
        this.level = level;
    }
}

export {Teachers}