import {BaseComponent} from "./BaseComponent.js"

class List extends BaseComponent {

    constructor(){
        super();
        this.state = {
            memes: [
                {
                    name : 'Bé Sa',
                    image : 'https://i.pinimg.com/originals/75/31/5d/75315db511a058432745fc37d82a7c44.png',
                    description : 'Bé Sa chào các cô chú đi con',
                    'date-modified' : new Date().toLocaleString(),
                },
                {
                    name : 'Bé Sa',
                    image : 'https://newsmd1fr.keeng.net/tiin//archive/images/20191017/110349_4.jpg',
                    description : 'Nà ní',
                    'date-modified' : new Date().toLocaleString(),
                },
                {
                    name : 'Bé Sa',
                    image : 'https://mcnewsmd1.keeng.net/tiin/archive/images/20191123/073841_12.jpg',
                    description : 'Ngủ một chút thôi mà',
                    'date-modified' : new Date().toLocaleString(),
                }
            ]
        }
    }
    render(){
        let html = ''
        let tmp = this.state.memes
        for(let i = 0; i < tmp.length; i+=3){
            html+= `<tr>`
            for(let j = i; j<i+3;j++){
                if(tmp[j]){
                    html += `
                    <td>
                    <meme-container name="${tmp[j].name}" image="${tmp[j]["image"]}" description="${tmp[j].description}" date-modified="${tmp[j]["date-modified"]}"></meme-container>
                    </td>
            `;
                } else {
                    break
                }
               
            }
            html+= `</tr>`
        }


        this._shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./memeList.css">
        <form id="adding">
            <input type="text" name="name" placeholder='Tiêu đề'><br>
            <input type="text" name="image" placeholder='Nguồn'><br>
            <input type="text" name="description" placeholder='Mô tả'><br>
            <input type="datetime-local" name="dateModified" placeholder=""><br>
            <button>Thêm ảnh</button>
        </form>
        <div class="list">
            <table>
                <tr>
                ${html}
                </tr>
            </table>
        </div>`;


        this.$formAdd = this._shadowRoot.getElementById('adding');
        this.$formAdd.onsubmit = (event) => {
        event.preventDefault();
        let newMeme = {
            name : this.$formAdd.name.value,
            image : this.$formAdd.image.value,
            description : this.$formAdd.description.value,
            "date-modified" : this.$formAdd.dateModified.value
        };

        this.state.memes.push(newMeme);
        this.render();
        this.componentDidUpdate();
       }
    }
    
}

window.customElements.define("list-container", List);