import { navigate } from 'svelte-native'

let current_page
let nav_frame;

export function init(navFrame) {
    console.log("Setting nav frame:"+navFrame)
    nav_frame = navFrame;    
}

export function is_current(nav_frame) {
    return nav_frame == current_page
}

export function goto(view, props)  {
    current_page = view;
    navigate({
       page: view,
       props: props,
       clearHistory: true,
       frame: nav_frame
    });
}


