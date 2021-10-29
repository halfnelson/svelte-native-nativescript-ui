import { navigate } from 'svelte-native'
import { writable } from 'svelte/store'
import RadSideDrawerElement from 'svelte-native-nativescript-ui/sidedrawer';
import { FrameElement } from 'svelte-native/dom';

export let current_page = writable<typeof SvelteComponent>(undefined);
let nav_frame: FrameElement
let drawer: RadSideDrawerElement;

export function init(navFrame: FrameElement, navDrawer: RadSideDrawerElement, startPage: typeof SvelteComponent) {
    nav_frame = navFrame;    
    drawer = navDrawer;
    current_page.set(startPage)
}

export function goto(view: typeof SvelteComponent, props: unknown)  {
    current_page.set(view);
    navigate({
       page: view,
       props: props,
       clearHistory: true,
       frame: nav_frame
    });
}

export function toggleDrawer() {
    drawer.toggleDrawerState();
}

