import { registerElement } from 'svelte-native/dom'
import { NativeViewElementNode } from "svelte-native/dom";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';


export default class RadSideDrawerElement extends NativeViewElementNode<RadSideDrawer> {
    constructor() {
        super('radSideDrawer',  RadSideDrawer);
    }

    private get _drawer() {
        return this.nativeView as RadSideDrawer;
    }

    closeDrawer() {
        this._drawer.closeDrawer();
    }

    getIsOpen(): boolean {
        return this._drawer.getIsOpen();
    }

    showDrawer() {
        this._drawer.showDrawer();
    }

    toggleDrawerState() {
        this._drawer.toggleDrawerState();
    }

    static register() {
        registerElement('radSideDrawer', () => new RadSideDrawerElement());
    }
}
