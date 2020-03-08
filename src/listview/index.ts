import { NativeViewElementNode, createElement, registerElement, NativeElementNode, logger, ViewNode, TemplateElement, SvelteKeyedTemplate } from "svelte-native/dom";
import { RadListView, ListViewEventData, SwipeActionsEventData, ListViewLinearLayout, ListViewGridLayout, ListViewStaggeredLayout, ListViewViewType } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";



export default class RadListViewElement extends NativeViewElementNode<RadListView> {
    constructor() {
        super('radlistview', RadListView);
        let nativeView = this.nativeView;
        nativeView.itemViewLoader = (viewType: any): View => this.loadView(viewType)
        this.nativeView.on(RadListView.itemLoadingEvent, (args) => { this.updateListItem(args as ListViewEventData) });
        this.nativeView.on(RadListView.itemSwipeProgressStartedEvent, (args) => { this.updateSwipeItem(args as SwipeActionsEventData) });
    }

    private loadView(viewType: string): View {
        if (viewType.toLowerCase() == ListViewViewType.ItemView.toLowerCase() && typeof this.nativeElement.itemTemplates == "object" ) {
            let keyedTemplate = this.nativeElement.itemTemplates.find(t => t.key == "default");
            if (keyedTemplate) {
                return keyedTemplate.createView()
            }
        }

        let componentClass = this.getComponentForView(viewType);
        if (!componentClass) return null;
        logger.debug(() => "creating view for " + viewType);

        let wrapper = createElement('StackLayout') as NativeViewElementNode<View>;
        wrapper.setStyle("padding", 0)
        wrapper.setStyle("margin", 0)
        let nativeEl = wrapper.nativeView;

        let builder = (props: any) => {
            let componentInstance = new componentClass({
                target: wrapper,
                props: props
            });
            (nativeEl as any).__SvelteComponent__ = componentInstance;
        }
        //for certain view types we like to delay until we have the data
        if (viewType.toLowerCase() == ListViewViewType.ItemView.toLowerCase()
            || viewType.toLowerCase() == ListViewViewType.GroupView.toLowerCase()
        //    || viewType.toLowerCase() == ListViewViewType.ItemSwipeView.toLowerCase() doesn't work at the moment
        ) {
            (nativeEl as any).__SvelteComponentBuilder__ = builder;
        } else {
            //otherwise, do it now
            builder({});
        }
     
        return nativeEl;
    }


    // For some reason itemTemplateSelector isn't defined as a "property" on radListView, so when we set the property, it is lowercase (due to svelte's forced downcasing)
    // we intercept and fix the case here.
    setAttribute(fullkey: string, value: any): void {
        if (fullkey.toLowerCase() == "itemtemplateselector") {
            fullkey = "itemTemplateSelector";
        }
        super.setAttribute(fullkey, value);
    }


    private getComponentForView(viewType: string): any {
        const normalizedViewType = viewType.toLowerCase();
   

        let templateEl = this.childNodes.find(n => n.tagName == "template" && String(n.getAttribute("type")).toLowerCase() == normalizedViewType) as any;
        if (!templateEl) 
            return null;
        return templateEl.component;
    }

    onInsertedChild(childNode: ViewNode, index: number) {
        super.onInsertedChild(childNode, index);
        if (childNode instanceof TemplateElement) {
            let type = childNode.getAttribute('type') || ListViewViewType.ItemView
            if (type.toLowerCase() != ListViewViewType.ItemView.toLowerCase()) return;

            let key = childNode.getAttribute('key') || "default"
            logger.debug(() => `Adding template for key ${key}`);
            if (!this.nativeView.itemTemplates || typeof this.nativeView.itemTemplates == "string") {
                this.nativeView.itemTemplates = []
            }
            this.nativeView.itemTemplates = this.nativeView.itemTemplates.concat(new SvelteKeyedTemplate(key, childNode))
        }
    }

    onRemovedChild(childNode: ViewNode) {
        super.onRemovedChild(childNode);
        if (childNode instanceof TemplateElement) {
            let type = childNode.getAttribute('type') || ListViewViewType.ItemView
            if (type != ListViewViewType) return;
            
            let key = childNode.getAttribute('key') || "default"
            if (this.nativeView.itemTemplates && typeof this.nativeView.itemTemplates != "string") {
                this.nativeView.itemTemplates = this.nativeView.itemTemplates.filter(t => t.key != key);
            }
        }
    }

    private updateSwipeItem(args: SwipeActionsEventData) {
        let item;
        let items = this.nativeElement.items;
        if (items.getItem) {
            item = items.getItem(args.index);
        } else {
            item = items[args.index]
        }
       // logger.debug(`updating with swiped item  idx: ${args.index} ${args.swipeView.bindingContext}`)
        this.updateViewWithProps(args.swipeView, { item });
    }

    private updateViewWithProps(view: View, props: any) {
        let componentInstance:SvelteComponent;
        let _view = view as any;
        if (!_view.__SvelteComponent__) {
            if (_view.__SvelteComponentBuilder__) {
                logger.debug(() => "mounting to view "+view+" with props "+Object.keys(props).join(","));
                _view.__SvelteComponentBuilder__(props);
                _view.__SvelteComponentBuilder__ = null;
                return;
            }
        }

        if (_view.__SvelteComponent__) {
            componentInstance = _view.__SvelteComponent__
        }
    
        if (componentInstance) {
            logger.debug(() => "updating view "+view+" with props "+Object.keys(props).join(","));
            componentInstance.$set(props)
        } else {
            console.error("Couldn't find component for ", view);
        }
    }


    private updateListItem(args: ListViewEventData) {
        let item;
        let listView = this.nativeView;
        let items = listView.items;

        if (args.index >= items.length) {
            logger.warn(() => "Got request for item at index that didn't exist");
            return;
        }

        //groups have index less than zero
        if (args.index < 0) {
            this.updateViewWithProps(args.view, { item: args.view.bindingContext.category } );
            return;
        }

        if (items.getItem) {
            item = items.getItem(args.index);
        } else {
            item = items[args.index]
        }

        this.updateViewWithProps(args.view, { item });
    }

    static register() {
        registerElement('listViewLinearLayout', () => new NativeElementNode('listViewLinearLayout', ListViewLinearLayout));
        registerElement('listViewGridLayout', () => new NativeElementNode('listViewGridLayout', ListViewGridLayout));
        registerElement('listViewStaggeredLayout', () => new NativeElementNode('listViewStaggeredLayout', ListViewStaggeredLayout));

        registerElement('radlistview', () => new RadListViewElement());
    }
}