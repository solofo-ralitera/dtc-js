import { connectedUser } from '../services/User.js';
import { eventBus } from '../services/EventBus.js';
import { authService } from '../services/AuthService.js';

export class UserProfilComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: "closed"});
        this.render();
        eventBus.register('connectedUserChanged', () => {
            this.render();
        });
    }

    render() {
        if (!authService.isConnected()) {
            this.root.innerHTML = '';
            return;
        }
        this.root.innerHTML = `<article style="display: inline-block; border: 1px solid black;padding: 2em;">
            <h2>Profil</h2>
            ${connectedUser.firstname}
            <br>
            ${connectedUser.lastname}
            <br>
            <button id="disconnect-btn">Disconnect</button>
        </article>`;
        this.root.querySelector('#disconnect-btn').addEventListener('click', () => {
            authService.disconnect();
        });
    }
}

window.customElements.define('app-profil', UserProfilComponent);