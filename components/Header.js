import { connectedUser } from '../services/User.js';
import { eventBus } from '../services/EventBus.js';
import { authService } from '../services/AuthService.js';

export class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: "closed"});
        this.render();
        eventBus.register('connectedUserChanged', () => {
            this.render();
        });
    }

    renderDisconnect(container) {
        if(!authService.isConnected()) return;
        const btn = document.createElement('button');
        btn.innerHTML = 'Disconnect';
        btn.addEventListener('click', () => {
            authService.disconnect(); 
        });
        container.append(btn);
        return btn;
    }

    render() {
        this.root.innerHTML = `<h1 style="display:inline-block;">
            Welcome ${connectedUser.firstname} ${connectedUser.lastname}
        </h1>`;
        this.renderDisconnect(this.root);
    }
}

window.customElements.define('app-header', HeaderComponent);