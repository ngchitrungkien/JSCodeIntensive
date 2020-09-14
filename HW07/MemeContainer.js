import {BaseComponent} from "./BaseComponent.js";

const style = `
<style>
    .meme {
        width: 420px;
        margin: 10px 10px;
    }
    .meme > div {
        border: solid orange;
        padding: 2px;
        font-size: 18pt;
    }
    img {
        width: 410px;
        height: 440px;
    }
    #date-modified {
        border: solid orange;
    }
</style>
`

class MemeContainer extends BaseComponent {
    constructor() {
        super();
        this.props = {
            image: '',
            name: '',
            description: '',
            'date-modified': '',
            'is-editing':'',
        }
    }

    static get observedAttributes() {
        return ['name', 'image', 'description', 'date-modified','is-editing'];
    }

    render() {
        let btnEdit = (this.props["is-editing"] != 'false') ? `<button id="btn-save">save</button>` : `<button id="btn-edit">edit</button>` ;

        let nameEditing = (this.props["is-editing"] != 'false') ? `<input id="edit-name" value="${this.props.name}">` : this.props.name ;

        let imgEditing = (this.props["is-editing"] != 'false') ? `<textarea id="edit-img" ">${this.props.image}</textarea>` : `<img src=${this.props.image}>` ;

        let descriptionEditing = (this.props["is-editing"] != 'false') ? `<input id="edit-description" value="${this.props.description}">` :this.props.description ;

        let dateEditing = (this.props["is-editing"] != 'false') ? `<input type="datetime-local" id="edit-date" value="${this.props["date-modified"]}">` : this.props['date-modified'] ;

        this.shadowRoot.innerHTML = /*html*/ `
           ${style}
            <div class="meme">
                <div>${imgEditing}</div>
                <div id="name">${nameEditing}</div>
                <div id="description">${descriptionEditing}</div>
                <div id="date-modified">${dateEditing}</div>
                <div>
                <button id="btn-delete">delete</button>
                ${btnEdit}
                </div>
            </div>
        `;

        this.$btnEdit = this._shadowRoot.getElementById('btn-edit');
        if(this.$btnEdit != null){
            this.$btnEdit.onclick = (event) => {
                let editMeme = new CustomEvent('edit-meme',{
                    bubbles: true,
                    detail: this.props,
                })
                this.dispatchEvent(editMeme)
            }
        }

        this.$btnSave = this._shadowRoot.getElementById('btn-save');
        if(this.$btnSave != null){
            this.$btnSave.onclick = (event) =>{
                console.log('concac')
                let saveMeme = new CustomEvent('save-meme',{
                    bubbles: true,
                    detail: {
                        oldImg: this.props.image,
                        newImg: this._shadowRoot.getElementById('edit-img').value,
                        newName: this._shadowRoot.getElementById('edit-name').value,
                        newDescription: this._shadowRoot.getElementById('edit-description').value,
                        newDate: this._shadowRoot.getElementById('edit-date').value,
                    }
                })
                this.dispatchEvent(saveMeme)
            }
        }

        this.$btnDelete = this._shadowRoot.getElementById('btn-delete');
        this.$btnDelete.onclick = (event) => {
            let deleteMeme = new CustomEvent('delete-meme', {
                bubbles: true,
                detail: {
                    name: this.props.name,
                    image: this.props.image,
                    date: this.props["date-modified"],
                }
            });
            this.dispatchEvent(deleteMeme);
        }
    }
}
window.customElements.define("meme-container", MemeContainer)