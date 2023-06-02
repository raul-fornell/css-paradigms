class Card extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = /* html */ `
        <style>
            div { 
                background-color: #FFF;
                padding: 22px;
                border-radius: 17px;
                box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
                overflow: hidden;
            }
            .card-title {
                font-size: 24px;
                font-weight: bold;
                display: block;
                margin-bottom: 10px;
            }
            .card-title.huge {
                font-size: 36px;
            }
            .card-body {
                font-size: 14px;
                line-height: 18px;
                margin: 0
            }
            .card-background {
                position: relative;
                left: calc(-1 * 22px);
                margin-bottom: -70px;
                top: calc(-1 * 22px);
                max-width: calc(100% + 44px);
            }
            .card-background+.card-title {
                z-index: 1;
                position: relative;
            }
            .hidden { 
                display: none;
            }
        </style>
        <div>
            <img src="" class="card-background" />
            <span class="card-title"></span>
            <p class="card-body">
                <slot></slot>
            </p>
        </div>`;
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        const title = this.shadowRoot.querySelector(".card-title");
        title.innerHTML = this.getAttribute('title');
        const isHuge = this.getAttribute('huge') !== null;
        if (isHuge) {
            title.classList.add('huge');
        }
        const image = this.shadowRoot.querySelector("img");
        if (this.getAttribute('img')) {
            image.src = this.getAttribute('img');
        } else {
            image.classList.add("hidden");
        }
    }
}

window.customElements.define('r-card', Card);