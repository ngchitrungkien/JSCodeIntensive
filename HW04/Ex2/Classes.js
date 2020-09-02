import{Students} from "./Students.js"

class Classes {
    id;
    subjects;
    teachers;
    students;
    
    constructor(id, subjects, teachers) {
        this.id = id;
        this.subjects = subjects;
        this.teachers = teachers;
        this.students = [];
    }

    addStudent(student) {
        if(student instanceof Students) {
            this.students.push(student);
        } else { 
            console.log('Chú ý: Không thêm được!');
        }
    }

    findStudent(name) {
        let findStudent = this.students.filter(function(student) {
            return student.name == name;
        })
        return findStudent;
    }

    findScore(score) {
        let findScore = this.students.filter(function(student) {
            return student.score > score;
        })
        return findScore;
    }
}

export{Classes};