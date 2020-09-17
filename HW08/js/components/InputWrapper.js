import {BaseComponent} from '../BaseComponent.js';

const style = /* html */ `
<style>
    * {
        font-family: 'Roboto', sans-serif;
    }
    .input-label {
        text-transform: uppercase;

    }

    .input-main {
        border: 1px solid #ffcb6b;
        background: transparent;
        width: 100%;
    }

    .input-error {
        font-size: 13px;
        color: #db5145;
    }
</style>
`;

class InputWrapper extends BaseComponent {
    constructor() {
        super();

        this.props = {
            label: '',
            type: 'text',
            error: ''
        };
    }

    static get observedAttributes(){
        return ['label','type','error']
    }

    render(){
        this._shadowRoot.innerHTML = /* html */ `
        ${style}
        <div class='input-wrapper'>
            <label class='input-label' for="input">${this.props.label}</label>
            <br>
            <input class='input-main' type="${this.props.type}">
            <div class='input-error'>${this.props.error}</div>
        </div>
        `;
    }

    get value() {
        return this._shadowRoot.querySelector('.input-main').value;
    }
}
window.customElements.define('input-wrapper', InputWrapper)