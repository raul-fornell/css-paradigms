class Column extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = /* html */ `
        <style>
            div { 
                display: flex;
                flex-direction: column;
                gap: 28px;
                width: 260px; 
            }
        </style>
        <div><slot></slot></div>`;
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}

window.customElements.define('r-column', Column);