import {eventBus} from './EventBus.js';

export class User {
    _firstname = '';
    _lastname = '';

    get firstname() {
        return this._firstname;
    }

    set firstname(firstname) {
        this._firstname = firstname;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(lastname) {
        this._lastname = lastname;
    }

    constructor({firstname, lastname}) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    setUser(user) {
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        return this;
    }

    isConnected() {
        return this.firstname !== '' || this.lastname !== '';
    }
    
}

export const connectedUser = new class extends User {
    constructor({firstname, lastname}) {
        super({firstname, lastname});
    }
    
    setUser(user) {
        super.setUser(user);
        eventBus.fire('connectedUserChanged', this);
        return this;
    }   
}({
    firstname: '',
    lastname: '',
});
