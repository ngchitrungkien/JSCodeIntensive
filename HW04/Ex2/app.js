import{Students} from "./Students.js";
import{Teachers} from "./Teachers.js";
import{Classes} from "./Classes.js";


let student01 = new Students('Nguyễn Quang Anh','Nam',1,'2017-2022',9.5);
let student02 = new Students('Trần Đức Bo','Nam',2,'2017-2022',5);
let student03 = new Students('Phạm Thị Cúc','Nữ',3,'2017-2022',8);
let student04 = new Students('Trần Thị Dung','Nữ',4,'2017-2022',7.5);
let student05 = new Students('Lê Trung Đức','Nam',5,'2017-2022',8);

let teacher01 = new Teachers('Phan Quỳnh Giang','Nữ','professor');
let teacher02 = new Teachers('Nguyễn Văn Hùng','Nam','professor');


let class01 = new Classes(1234,'Tin học đại cương',teacher01);
let class02 = new Classes(6789,'Vật lý đại cương',teacher02);

class01.addStudent(student01);
class01.addStudent(student02);
class01.addStudent(student03);

class02.addStudent(student04);
class02.addStudent(student05);

console.log(class01);
console.log(class02);

console.log(class01.findStudent('Trần Đức Bo'));
console.log(class02.findStudent('Lê Trung Đức'));

console.log(class01.findScore(5));
console.log(class02.findScore(7));