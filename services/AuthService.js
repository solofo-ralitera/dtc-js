import { User, connectedUser } from './User.js';

export const authService = new class {
    constructor() {

    }

    login({firstname, lastname}) {
        return Promise.resolve(new User({firstname, lastname}))
        .then(user => {
            connectedUser.setUser(user);
            return connectedUser;
        })
    }

    disconnect() {
        connectedUser.setUser({
            firstname: '',
            lastname: '',
        });
    }
};

