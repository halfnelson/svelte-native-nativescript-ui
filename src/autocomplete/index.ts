import { registerElement, NativeElementNode, NativeElementPropType as PropType, TemplateElement, logger, createElement } from 'svelte-native/dom'
import { NativeViewElementNode } from "svelte-native/dom";
import { RadAutoCompleteTextView, TokenModel, SuggestionView, AutoCompleteViewType } from 'nativescript-ui-autocomplete';
import { View } from 'tns-core-modules/ui/core/view';
import { ItemEventData } from 'tns-core-modules/ui/list-view'


class SuggestionViewElement extends NativeElementNode<SuggestionView> {
    _templateComponent: TemplateElement = null
    constructor() {
        super('suggestionView',  SuggestionView, "suggestionView", {"suggestionItemTemplate": PropType.Value, "suggestionViewHeight": PropType.Value});
    }

    get itemTemplateComponent() {
        if (!this._templateComponent) {
            let templateEl = this.childNodes.find(n => n.tagName == "template") as TemplateElement;
            if (!templateEl) 
                return null;
            this._templateComponent = templateEl;
        }
        return this._templateComponent.component;
    }
    
}

type AutocompleteItemEventData = ItemEventData & { data: any }

export default class RadAutoCompleteTextViewElement extends NativeViewElementNode<RadAutoCompleteTextView> {
    constructor() {
        super('radAutoCompleteTextView',  RadAutoCompleteTextView, null, {
            "closeButtonImageSrc": PropType.Value,
            "completionMode": PropType.Value,
            "displayMode": PropType.Value,
            "filteredItems": PropType.Value,
            "itemViewLoader": PropType.Value,
            "layoutMode": PropType.Value,
            "loadSuggestionsAsync": PropType.Value,
            "minimumCharactersToSearch": PropType.Value,
            "noResultsText": PropType.Value,
            "readOnly": PropType.Value,
            "selectedTokens": PropType.Value,
            "showCloseButton": PropType.Value,
            "suggestMode": PropType.Value,
            "suggestionView": PropType.Value,
            "text": PropType.Value,
            "items": PropType.Value,
            "hint": PropType.Value
        });
        this.nativeElement.itemViewLoader = (viewType: string) => this.loadView(viewType)
        this.nativeView.on(RadAutoCompleteTextView.itemLoadingEvent, (args) => { this.updateListItem(args as AutocompleteItemEventData) });

    }

    private loadView(viewType: string): View {
        if (viewType != AutoCompleteViewType.ItemView)
            return null;
        
        let suggestionView = this.nativeView.suggestionView
        if (!suggestionView || !suggestionView.__SvelteNativeElement__) return;

        let componentClass = (suggestionView.__SvelteNativeElement__ as SuggestionViewElement).itemTemplateComponent;
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
        (nativeEl as any).__SvelteComponentBuilder__ = builder;
     
        return nativeEl;
    }
   
    private updateListItem(args: AutocompleteItemEventData) {
        let componentInstance:SvelteComponent;
        let view = args.view as any;

        //if we are a svelte component, update our props
        if (!view) return;

        if (!view.__SvelteComponent__) {
            if (view.__SvelteComponentBuilder__) {
                logger.debug(() => "mounting to view "+view+" with props "+Object.keys(args.data).join(","));
                view.__SvelteComponentBuilder__({ item: args.data });
                view.__SvelteComponentBuilder__ = null;
                return;
            }
        }

        if (view.__SvelteComponent__) {
            componentInstance = view.__SvelteComponent__
        }
    
        if (componentInstance) {
            logger.debug(() => "updating view "+view+" with props "+Object.keys(args.data).join(","));
            componentInstance.$set({ item: args.data })
        } 
    }

    addToken(token: TokenModel) {
        return this.nativeView.addToken(token)
    }

    insertTokenAtIndex(token: TokenModel, index: number) {
        return this.nativeView.insertTokenAtIndex(token, index)
    }

    removeAllTokens() {
        return this.nativeView.removeAllTokens()
    }

    removeToken(token: TokenModel) {
        return this.nativeView.removeToken(token)
    }

    removeTokenAtIndex(index: number) {
        return this.nativeView.removeTokenAtIndex(index);
    }

    resetAutoComplete() {
        return this.nativeView.resetAutoComplete()
    }

    tokenAtIndex(index: number) {
        return this.nativeView.tokenAtIndex(index);
    }

    tokens() {
        return this.nativeView.tokens();
    }

    static register() {
        registerElement('radAutoCompleteTextView', () => new RadAutoCompleteTextViewElement());
        registerElement('suggestionView', () => new SuggestionViewElement)
    }
}
