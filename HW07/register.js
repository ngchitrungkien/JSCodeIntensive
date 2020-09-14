let fname = document.getElementById('fullname-input');
let email = document.getElementById('email-input');
let pass = document.getElementById('pass-input');
let passConfirm = document.getElementById('pass-confirm');

let person = {
    fullName :'',
    email :'',
    password : '',
    created :''
}

async function addPerson(person) {
    await firebase.firestore().collection('users').add({
        firstName: person.firstName,
        email: person.email,
        password: person.password,
        dateCreated: person.created,
    })
}

let formSignup = document.getElementById('sign-up-form')
formSignup.onsubmit = async (event) => {
    event.preventDefault();
    let result = await run.where("email", '==', email.value).get();
    if (result.docs[0]) {
        alert('Tài khoản email đã tồn tại, nhập một email khác!');
        email.value =''
    } else {
        if (pass.value == passConfirm.value) {
            obj.fullName = fname.value;
            obj.email = email.value;
            obj.password = pass.value;
            obj.created = new Date().toLocaleString()
            console.log(obj);
            addOne(obj);
            alert('Nhập thành công');
            // đã kiểm tra null bằng required :D
        } else {
            alert('nhập lại sai mật khẩu');
            passConfirm.setAttribute("style", "background-color: rgb(231, 135, 135)")
        }
    }
    
}
//thieu: thong tin dang nhap trung nhau thi`???

//log-in
let email2 = document.getElementById("email-log-in");
let pass2 = document.getElementById("pass-log-in");
//đối chiếu vs firebase
async function logIn() {
    let result = await run.where("email", '==', email2.value).get()
    

    if (result.docs[0]) {
        if(result.docs[0].data().password == pass2.value){
            alert('Đăng nhập thành công');

        } else {
            alert('Nhập sai mật khẩu, vui lòng nhập lại!');
            pass2.value = '';
            pass2.setAttribute("style", "background-color: rgb(231, 135, 135);");
            email2.setAttribute("style", "background-color: #ffffff;");
        }
    } else {
        alert('Tài khoản không tồn tại!');
        email2.value = '';
        email2.setAttribute("style", "background-color: rgb(231, 135, 135);");
        pass2.value = '';
        pass2.setAttribute("style", "background-color: rgb(231, 135, 135);");
    }

    
}
let formLogin = document.getElementById('log-in-form')
formLogin.onsubmit = (event) => {
    event.preventDefault();
    obj2 = {
        email: email2.value,
        password: pass2.value,
    }
    logIn();
}