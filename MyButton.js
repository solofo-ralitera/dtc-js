class PcStandard {
    constructor() {
        console.log('Standard created');
        this.ram = 8;
        this.dur = 256;
        this.proc = 2;
    }

    getCongif() {

    }
}

class PcDev extends PcStandard {
    constructor() {
        super();
        this.ram = 16;
        console.log('Dev created', this);
    }

}


export class MyButton extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <style>
         h1 {
            font-size: 100px;
         }
        </style>
        <div>
            <h1 style="color:${this.getAttribute('color')}">${this.innerHTML}</h1>
        </div>`;
    }
}

window.customElements.define('my-button', MyButton);
