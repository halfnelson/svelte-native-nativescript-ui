import { NativeElementNode, createElement, registerElement } from "svelte-native/dom";
import { RadListView, ListViewEventData, SwipeActionsEventData } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view/view";

export default class RadListViewElement extends NativeElementNode {
    constructor() {
        let RadListView = require('nativescript-ui-listview').RadListView;
        super('radlistview', RadListView, null);
        let nativeView = this.nativeView as RadListView;

        nativeView.itemViewLoader = (viewType: any): View => this.loadView(viewType)
        this.nativeView.on(RadListView.itemLoadingEvent, (args) => { this.updateListItem(args as ListViewEventData) });
        this.nativeView.on(RadListView.itemSwipeProgressStartedEvent, (args) => { this.updateListItem(args as SwipeActionsEventData) });
    }

    private loadView(viewType: string): View {
        let componentClass = this.getComponentForView(viewType);
        if (!componentClass) return null;

        console.log("creating view for ",viewType)
        let wrapper = createElement('StackLayout') as NativeElementNode;
        wrapper.setStyle("margin", 0);
        wrapper.setStyle("padding", 0);
        let componentInstance = new componentClass({
            target: wrapper,
            props: {
                item: {}
            }
        });

        let nativeEl = wrapper.nativeView;
        (nativeEl as any).__SvelteComponent__ = componentInstance;
        return nativeEl;
    }

    private getComponentForView(viewType: string): any {
        const normalizedViewType = viewType.toLowerCase();
        let templateEl = this.childNodes.find(n => n.tagName == "template" && String(n.getAttribute("type")).toLowerCase() == normalizedViewType) as any;
        if (!templateEl) 
            return null;
        return templateEl.component;
    }

    private updateListItem(args: ListViewEventData | SwipeActionsEventData) {
        let item;
        let listView = this.nativeView as RadListView;
        let items = listView.items;

        if (args.index >= items.length) {
            console.log("Got request for item at index that didn't exists", items, args.index)
            return;
        }

        if (items.getItem) {
            item = items.getItem(args.index);
        } else {
            item = items[args.index]
        }

        let componentInstance:SvelteComponent;
        if (args.view && (args.view as any).__SvelteComponent__) {
            componentInstance = (args.view as any).__SvelteComponent__
        } else if ((args as SwipeActionsEventData).swipeView && (args as any).swipeView.__SvelteComponent__) {
            componentInstance = (args as any).swipeView.__SvelteComponent__
        }

        if (componentInstance) {
            console.log("updating view for ", args.index, args.view)
            componentInstance.$set({ item })
        } else {
            console.log("Couldn't find component for ", args.eventName, args.index, Object.keys(args), args.view, args.data);
        }
    }

    static register() {
        registerElement('radlistview', () => new RadListViewElement());
    }
}