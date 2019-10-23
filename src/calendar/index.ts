import { registerElement } from 'svelte-native/dom'
import { NativeViewElementNode } from "svelte-native/dom";
import { RadCalendar } from 'nativescript-ui-calendar';

export default class RadCalendarElement extends NativeViewElementNode<RadCalendar> {
    constructor() {
        super('radCalendar',  RadCalendar);
    }
    navigateForward() {
        this.nativeView.navigateForward();
    }

    navigateBack() {
        this.nativeView.navigateBack();
    }

    goToDate(date:Date) {
        this.nativeView.goToDate(date);
    }

    static register() {
        registerElement('radCalendar', () => new RadCalendarElement());
    }
}
