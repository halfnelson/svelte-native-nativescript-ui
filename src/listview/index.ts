import { NativeViewElementNode, createElement, registerElement, NativeElementNode, logger } from "svelte-native/dom";
import { RadListView, ListViewEventData, SwipeActionsEventData, ListViewLinearLayout, ListViewGridLayout, ListViewStaggeredLayout, ListViewLayoutBase } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";

export default class RadListViewElement extends NativeViewElementNode<RadListView> {
    constructor() {
        super('radlistview', RadListView);
        let nativeView = this.nativeView;
        nativeView.itemViewLoader = (viewType: any): View => this.loadView(viewType)
        this.nativeView.on(RadListView.itemLoadingEvent, (args) => { this.updateListItem(args as ListViewEventData) });
        this.nativeView.on(RadListView.itemSwipeProgressStartedEvent, (args) => { this.updateListItem(args as SwipeActionsEventData) });
    }

    private loadView(viewType: string): View {
        let componentClass = this.getComponentForView(viewType);
        if (!componentClass) return null;
        logger.debug("creating view for " + viewType);
        let wrapper = createElement('StackLayout') as NativeViewElementNode<View>;
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
        let listView = this.nativeView;
        let items = listView.items;

        if (args.index >= items.length) {
            logger.warn("Got request for item at index that didn't exist")
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
            logger.debug("updating view for " + args.index)
            componentInstance.$set({ item })
        } else {
            console.error("Couldn't find component for ", args.eventName, args.index, Object.keys(args), args.view, args.data);
        }
    }

    static register() {
        registerElement('listViewLinearLayout', () => new NativeElementNode('listViewLinearLayout', ListViewLinearLayout));
        registerElement('listViewGridLayout', () => new NativeElementNode('listViewGridLayout', ListViewGridLayout));
        registerElement('listViewStaggeredLayout', () => new NativeElementNode('listViewStaggeredLayout', ListViewStaggeredLayout));

        registerElement('radlistview', () => new RadListViewElement());
    }
}