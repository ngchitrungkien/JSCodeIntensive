import {Person} from "./Person.js"

class Students extends Person {
    studentCode;
    year;
    score;

    constructor(name,gender,studentCode,year,score) {
        super(name, gender);
        this.studentCode = studentCode;
        this.year = year;
        this.score = score;
    }
}

export{Students};