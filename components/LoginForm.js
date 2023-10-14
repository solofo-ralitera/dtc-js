import {authService} from '../services/AuthService.js';
import {connectedUser} from '../services/User.js';
import {eventBus} from '../services/EventBus.js';

export class LoginFormComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: "closed"});
        this.render();
        eventBus.register('connectedUserChanged', () => {
            this.render();
        });
    }

    login() {
        const firstname = this.root.querySelector('#firstname').value;
        const lastname = this.root.querySelector('#lastname').value;
        authService.login({firstname, lastname})
            .then(user => {
            })
    }

    render() {
        if (connectedUser.isConnected()) {
            this.root.innerHTML = '';
            return;
        }
        this.root.innerHTML = `<div>
            <input type="firstname" palceholder="firstname" id="firstname" value="Rakoto">
            <br>
            <input type="lastname" palceholder="lastname" id="lastname" value="Be">
            <br>
            <button id="login-btn">Login</button>
        </div>`;
        this.root.querySelector('#login-btn').addEventListener('click', () => {
            this.login();
        });
    }
}

window.customElements.define('app-login', LoginFormComponent);