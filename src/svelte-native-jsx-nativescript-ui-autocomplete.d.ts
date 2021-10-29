export {} //Ensure this is a module
type AutoCompleteCompletionMode = import("nativescript-ui-autocomplete/common").AutoCompleteCompletionMode;
type AutoCompleteDisplayMode = import("nativescript-ui-autocomplete/common").AutoCompleteDisplayMode;
type AutoCompleteLayoutMode = import("nativescript-ui-autocomplete/common").AutoCompleteLayoutMode;
type AutoCompleteSuggestMode = import("nativescript-ui-autocomplete/common").AutoCompleteSuggestMode;
type ClearButton = import("nativescript-ui-autocomplete/common").ClearButton;
type NoResultsLabel = import("nativescript-ui-autocomplete/common").NoResultsLabel;
type ObservableArray<T1> = import("@nativescript/core/data/observable-array").ObservableArray<T1>;
type PropertyChangeData = import("@nativescript/core/data/observable").PropertyChangeData;
type RadAutoCompleteTextView = import("nativescript-ui-autocomplete/common").RadAutoCompleteTextView;
type SuggestionView = import("nativescript-ui-autocomplete/common").SuggestionView;
type TokenModel = import("nativescript-ui-autocomplete/common").TokenModel;
type View = import("@nativescript/core/ui/core/view").View;
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// common.d.ts
type TClearButtonAttributes = Override<ViewAttributes, {

}>
interface ClearButtonAttributes extends TClearButtonAttributes {}

// common.d.ts
type TNoResultsLabelAttributes = Override<ViewAttributes, {

}>
interface NoResultsLabelAttributes extends TNoResultsLabelAttributes {}

// common.d.ts
type TRadAutoCompleteTextViewAttributes = Override<ViewAttributes, {
    clearButton?: ClearButton;
    closeButtonImageSrc?: string;
    completionMode?: AutoCompleteCompletionMode;
    displayMode?: AutoCompleteDisplayMode;
    filteredItems?: TokenModel[];
    hint?: string;
    itemViewLoader?: (viewType: any) => View;
    items?: string | ObservableArray<TokenModel>;
    layoutMode?: AutoCompleteLayoutMode;
    loadSuggestionsAsync?: string | any;
    minimumCharactersToSearch?: string | number;
    noResultsLabel?: NoResultsLabel;
    noResultsText?: string;
    oncloseButtonImageSrcChange?: (args: PropertyChangeData) => void;
    oncompletionModeChange?: (args: PropertyChangeData) => void;
    ondisplayModeChange?: (args: PropertyChangeData) => void;
    onhintChange?: (args: PropertyChangeData) => void;
    onitemsChange?: (args: PropertyChangeData) => void;
    onlayoutModeChange?: (args: PropertyChangeData) => void;
    onloadSuggestionsAsyncChange?: (args: PropertyChangeData) => void;
    onminimumCharactersToSearchChange?: (args: PropertyChangeData) => void;
    onnoResultsTextChange?: (args: PropertyChangeData) => void;
    onreadOnlyChange?: (args: PropertyChangeData) => void;
    onshowCloseButtonChange?: (args: PropertyChangeData) => void;
    onsuggestModeChange?: (args: PropertyChangeData) => void;
    onsuggestionViewChange?: (args: PropertyChangeData) => void;
    ontextChange?: (args: PropertyChangeData) => void;
    ontokenItemSpacingChange?: (args: PropertyChangeData) => void;
    readOnly?: string | boolean;
    selectedTokens?: TokenModel[];
    showCloseButton?: string | boolean;
    suggestMode?: AutoCompleteSuggestMode;
    suggestionView?: string | SuggestionView;
    text?: string;
    tokenItemSpacing?: string | number;
}>
interface RadAutoCompleteTextViewAttributes extends TRadAutoCompleteTextViewAttributes {}

// common.d.ts
type TSuggestionViewAttributes = Override<ViewAttributes, {
    android?: any;
    onsuggestionItemTemplateChange?: (args: PropertyChangeData) => void;
    onsuggestionViewHeightChange?: (args: PropertyChangeData) => void;
    owner?: RadAutoCompleteTextView;
    suggestionItemTemplate?: string;
    suggestionViewHeight?: string | number;
}>
interface SuggestionViewAttributes extends TSuggestionViewAttributes {}

// common.d.ts
type TTokenAttributes = Override<ViewAttributes, {
    clearButton?: ClearButton;
}>
interface TokenAttributes extends TTokenAttributes {}

// common.d.ts
type TTokenClearButtonAttributes = Override<ViewAttributes, {

}>
interface TokenClearButtonAttributes extends TTokenClearButtonAttributes {}


interface IntrinsicElements {
        clearButton: ClearButtonAttributes;
        noResultsLabel: NoResultsLabelAttributes;
        radAutoCompleteTextView: RadAutoCompleteTextViewAttributes;
        suggestionView: SuggestionViewAttributes;
        token: TokenAttributes;
        tokenClearButton: TokenClearButtonAttributes; 
}


}
}
