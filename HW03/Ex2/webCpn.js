class rapVietProfile extends HTMLElement{
    constructor(){
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});

        this._shadowRoot.innerHTML=`
        <img src="" alt="photo">
        <p id="name"></p>
        <p id="age"></p>
        <p id="address"></p>
        `;

        this.$name = this.shadowRoot.querySelector('#name')
        this.$photo = this.shadowRoot.querySelector('img')
        this.$age = this.shadowRoot.querySelector('#age')
        this.$address = this.shadowRoot.querySelector('#address')
    }

    static get observedAttributes(){
        return ['name','photo', 'age','address'];
    }

    attributeChangedCallback(name,oldValue,newValue){
        if(name === 'name'){
            this.$name.innerHTML =newValue;
        }else if(name === 'photo'){
            this.$photo.setAttribute('src',newValue)
        }else if(name === 'age'){
            this.$age.innerHTML =newValue;
        }else if(name === 'address'){
            this.$address.innerHTML =newValue;
        }
    }
 }

 window.customElements.define('my-profile', rapVietProfile);