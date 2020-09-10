import {BaseComponent} from "./BaseComponent.js";

class MemeContainer extends BaseComponent {

    constructor() {
        super();
        this.props = {
            name: '',
            image: '',
            description: '',
            'date-modified': new Date().toLocaleString()
        }
    }
    static get observedAttributes() {
        return ['name','image','description','date-modified'];
    }
    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" type="text/css" href="./meme.css">
            <div class="meme">
                <div>
                    <img src=${this.props.image} alt=${this.props.name}>
                </div>
                <div id="name">${this.props.name}</div>
                <div id="description">${this.props.description}</div>
                <div id="date-modified">${this.props['date-modified']}</div>
            </div>
        `
    }
}

window.customElements.define("meme-container", MemeContainer)