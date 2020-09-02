import {BaseComponent} from './BaseComponent.js'
class Comic extends BaseComponent {

    constructor() {
        super()
        this.props = {
            "img": "",
            "content": "",
            "chapters": '',
            "time": "",
            "views": "",
            "likes": ""
        }
    }
    static get observedAttributes() {
        return ["img","content","chapters","time","views","likes"]
    }
    render() {
        this._shadowRoot.innerHTML = 
        `
        <style>

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container {
            margin-top: 35px;
            display: flex;
            height: 350px;
            line-height: 30px;
            position: relative;  
        }

        .comic {
            width: 300px;  
            text-align: left;
            overflow: hidden;
            cursor: pointer;
        }

        .content {
            text-align: center;
            font-size: 20px;
        }

        .comic img {
            margin-left: 80px;
            width: 150px;
            height: 220px;
        } 

        .box {
            width: 300px;
            display:flex;
            justify-content : space-between;
        }

        .time {
            color: grey;
            font-style: italic;
        }

        
        </style>
        <div class="container">
            <div class="comic">
                <img src="${this.props["img"]}" />
                <div class="content">${this.props["content"]}</div>

                <div class="box">
                    <div class="chapters">${this.props["chapters"]}</div>
                    <div class="time">${this.props["time"]}</div>
                </div>
                
                <div class=views>${this.props["views"]}</div>
                <div class="likes">${this.props["likes"]}</div>        
            </div>
        </div>  
        `
    }
}

window.customElements.define("manga-container", Comic)