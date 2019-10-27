
import { svelteNative, DomTraceCategory } from "svelte-native";

import RadListViewElement from "svelte-native-nativescript-ui/listview"
import RadSideDrawerElement from "svelte-native-nativescript-ui/sidedrawer"
import RadCalendarElement from "svelte-native-nativescript-ui/calendar"
import Charts from "svelte-native-nativescript-ui/chart"
import RadDataFrom from "svelte-native-nativescript-ui/dataform"

RadListViewElement.register();
RadSideDrawerElement.register();
RadCalendarElement.register();
Charts.register();
RadDataFrom.register();
//import * as trace from "tns-core-modules/trace"
//trace.enable();
//trace.addCategories(DomTraceCategory);

import App from  "./App.svelte";
svelteNative(App, {});
