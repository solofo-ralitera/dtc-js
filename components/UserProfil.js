import { connectedUser } from '../services/User.js';
import { eventBus } from '../services/EventBus.js';

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
        this.root.innerHTML = `<article>
            <h2>Profil</h2>
            ${connectedUser.firstname}
            <br>
            ${connectedUser.lastname}
            <button>Disconnect</button>
        </article>`;
    }
}

window.customElements.define('app-profil', UserProfilComponent);