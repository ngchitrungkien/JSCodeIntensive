let fname = document.getElementById('firstname');
let lname = document.getElementById('lastname');
let email = document.getElementById('email');
let phone = document.getElementById('phonenumber');

let person = {
    firstName :'',
    lastName :'',
    email : '',
    phoneNumber :''
}

async function addPerson(person) {
    await firebase.firestore().collection('users').add({
        firstName: person.firstName,
        lastName: person.lastName,
        email: person.email,
        phone: person.phoneNumber,
    })
}

function addData() {;
    person.firstName = fname.value
    person.lastName = lname.value;
    person.email = email.value;
    person.phoneNumber = phone.value;
    addPerson(person);
}

async function readData() {
    let result = await firebase.firestore().collection('users').get();
    for (let doc of result.docs) {
        console.log(doc.data())
    }
}

async function updatePhoneNumber(){
    let result = await firebase.firestore().collection('users').get();
    for(let doc of result.docs){
        let newPhone = "84" + doc.data().phone.slice(2);
        await firebase.firestore().collection('users').doc(doc.id).update({
            phone: newPhone
        })
    }
}

async function deleteData() {
    let result = await firebase.firestore().collection('users').get();
    let del = [];
    for(let i = 0; i<result.docs.length; i++){
        for(let j =i+1;j<result.docs.length;j++){
            if(result.docs[i].data().lastName === result.docs[j].data().lastName){
                del.push(result.docs[i].data().lastName)
                break
            }
        }
    }
    
    del = del.filter(function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
    })  
    for (let item of del) {
        result = await firebase.firestore().collection('users').where('lastName', '==', item).get();
        for (let doc of result.docs) {
            await firebase.firestore().collection('users').doc(doc.id).delete()
        }
    }

}