import {BaseComponent} from '../BaseComponent.js'

class RegisterScreen extends BaseComponent {
    constructor(){
        super();
    }
    render(){
        this._shadowRoot.innerHTML = /* html */ `
        <section class='register-screen'>
            <form class='form-register'>
                <input-wrapper class='name' label='Name' type='text' error=''></input-wrapper>
                <input-wrapper class='email' label='Email' type='email' error=''></input-wrapper>
                <input-wrapper class='password' label='Password' type='password' error=''></input-wrapper>
                <input-wrapper class='confirm-password' label='Confirm Password' type='password' error=''></input-wrapper>
                <button class='btn-register'>Register</button>
            </form>
        </section>
        `;

        this.$formRegister = this._shadowRoot.querySelector('.form-register');
        this.$formRegister.onsubmit = (event) => { 
            event.preventDefault();
            // Lấy dữ liệu từ các input-wrapper
            console.log(this._shadowRoot.querySelector('.name').value);
            // Kiểm tra dữ liệu nhập vào, nếu có lỗi thì show ra

            // Lưu dữ liệu vào firebase
        }
    }
}

window.customElements.define('register-screen', RegisterScreen)