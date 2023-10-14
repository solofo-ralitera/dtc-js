export const eventBus = new class {
    constructor() {
        this.el = document.createElement('div');
    }

    fire(eventName, data) {
        this.el.dispatchEvent(new CustomEvent(eventName, {
            detail: data,
        }));
    }

    register(eventName, callback) {
        this.el.addEventListener(eventName, callback);
    }
};

