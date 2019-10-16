
import { svelteNative } from "svelte-native";

import RadListViewElement from "svelte-native-nativescript-ui/listview"
import RadSideDrawerElement from "svelte-native-nativescript-ui/sidedrawer"
RadListViewElement.register();
RadSideDrawerElement.register();


import App from  "./App.svelte";
svelteNative(App, {});
