import { Component } from 'react';

export default class notifier extends Component {
    static growl;
    static onClose;

    static setGrowl(growl) {
        this.growl = growl;
    }

    static show(not) {
        if (this.growl) {
            this.growl.show(not);
        }
    }

    static setOnClose(onClose) {
        this.onClose = onClose;
    }

    static invokeOnClose() {
        if (typeof this.onClose === 'function') {
            this.onClose();
        }
    }
}