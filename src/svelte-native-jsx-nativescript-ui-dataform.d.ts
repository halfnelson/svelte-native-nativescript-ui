export {} //Ensure this is a module
type AutoCompleteDisplayMode = import("C:/dev/nativescript/svelte-native-nativescript-ui/node_modules/nativescript-ui-autocomplete").AutoCompleteDisplayMode;
type Color = import("@nativescript/core/color").Color;
type DataFormCommitMode = import("nativescript-ui-dataform").DataFormCommitMode;
type DataFormEditorType = import("nativescript-ui-dataform").DataFormEditorType;
type DataFormFontStyle = import("nativescript-ui-dataform").DataFormFontStyle;
type DataFormLabelPosition = import("nativescript-ui-dataform").DataFormLabelPosition;
type DataFormLayout = import("nativescript-ui-dataform").DataFormLayout;
type DataFormValidationMode = import("nativescript-ui-dataform").DataFormValidationMode;
type EntityProperty = import("nativescript-ui-dataform").EntityProperty;
type GroupTitleStyle = import("nativescript-ui-dataform").GroupTitleStyle;
type PropertyChangeData = import("@nativescript/core/data/observable").PropertyChangeData;
type PropertyConverter = import("nativescript-ui-dataform").PropertyConverter;
type PropertyEditor = import("nativescript-ui-dataform").PropertyEditor;
type PropertyEditorParams = import("nativescript-ui-dataform/common").PropertyEditorParams;
type PropertyEditorStyle = import("nativescript-ui-dataform").PropertyEditorStyle;
type PropertyGroup = import("nativescript-ui-dataform").PropertyGroup;
type PropertyValidator = import("nativescript-ui-dataform").PropertyValidator;
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// common.d.ts
type TCustomPropertyEditorAttributes = Override<PropertyEditorAttributes, {
    android?: any;
    ios?: any;
}>
interface CustomPropertyEditorAttributes extends TCustomPropertyEditorAttributes {}

// common.d.ts
type TDataFormEditorCoreAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
}>
interface DataFormEditorCoreAttributes extends TDataFormEditorCoreAttributes {}

// common.d.ts
type TDataFormEditorLabelAttributes = Override<ViewAttributes, {
    android?: any;
    ios?: any;
}>
interface DataFormEditorLabelAttributes extends TDataFormEditorLabelAttributes {}

// common.d.ts
type TDataFormGridLayoutAttributes = Override<DataFormLayoutAttributes, {

}>
interface DataFormGridLayoutAttributes extends TDataFormGridLayoutAttributes {}

// common.d.ts
type TDataFormLayoutAttributes = Override<ViewBaseAttributes, {

}>
interface DataFormLayoutAttributes extends TDataFormLayoutAttributes {}

// common.d.ts
type TDataFormStackLayoutAttributes = Override<DataFormLayoutAttributes, {
    onorientationChange?: (args: PropertyChangeData) => void;
    orientation?: string | any;
}>
interface DataFormStackLayoutAttributes extends TDataFormStackLayoutAttributes {}

// common.d.ts
type TDataFormStyleBaseAttributes = Override<ViewBaseAttributes, {
    fillColor?: string | Color;
    labelFontName?: string;
    labelFontStyle?: DataFormFontStyle;
    labelTextColor?: string | Color;
    labelTextSize?: string | number;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onlabelFontNameChange?: (args: PropertyChangeData) => void;
    onlabelFontStyleChange?: (args: PropertyChangeData) => void;
    onlabelTextColorChange?: (args: PropertyChangeData) => void;
    onlabelTextSizeChange?: (args: PropertyChangeData) => void;
    onseparatorColorChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    separatorColor?: string | Color;
    strokeColor?: string | Color;
    strokeWidth?: string | number;
}>
interface DataFormStyleBaseAttributes extends TDataFormStyleBaseAttributes {}

// common.d.ts
type TEmailValidatorAttributes = Override<PropertyValidatorAttributes, {

}>
interface EmailValidatorAttributes extends TEmailValidatorAttributes {}

// common.d.ts
type TEntityPropertyAttributes = Override<ViewAttributes, {
    android?: any;
    autoCompleteDisplayMode?: AutoCompleteDisplayMode;
    columnIndex?: string | number;
    converter?: string | PropertyConverter;
    displayName?: string;
    editor?: string | PropertyEditor;
    errorMessage?: string;
    hidden?: string | boolean;
    hintText?: string;
    imageResource?: string | any;
    index?: string | number;
    ios?: any;
    isValid?: boolean;
    name?: string;
    onautoCompleteDisplayModeChange?: (args: PropertyChangeData) => void;
    oncolumnIndexChange?: (args: PropertyChangeData) => void;
    onconverterChange?: (args: PropertyChangeData) => void;
    ondisplayNameChange?: (args: PropertyChangeData) => void;
    oneditorChange?: (args: PropertyChangeData) => void;
    onhiddenChange?: (args: PropertyChangeData) => void;
    onhintTextChange?: (args: PropertyChangeData) => void;
    onimageResourceChange?: (args: PropertyChangeData) => void;
    onindexChange?: (args: PropertyChangeData) => void;
    onnameChange?: (args: PropertyChangeData) => void;
    onreadOnlyChange?: (args: PropertyChangeData) => void;
    onrequiredChange?: (args: PropertyChangeData) => void;
    onvalidatorsChange?: (args: PropertyChangeData) => void;
    onvaluesProviderChange?: (args: PropertyChangeData) => void;
    readOnly?: string | boolean;
    required?: string | boolean;
    successMessage?: string;
    validators?: string | PropertyValidator[];
    value?: any;
    valueCandidate?: any;
    valuesProvider?: string | any;
}>
interface EntityPropertyAttributes extends TEntityPropertyAttributes {}

// common.d.ts
type TGroupTitleStyleAttributes = Override<DataFormStyleBaseAttributes, {

}>
interface GroupTitleStyleAttributes extends TGroupTitleStyleAttributes {}

// common.d.ts
type TIsTrueValidatorAttributes = Override<PropertyValidatorAttributes, {

}>
interface IsTrueValidatorAttributes extends TIsTrueValidatorAttributes {}

// common.d.ts
type TLengthValidatorAttributes = Override<PropertyValidatorAttributes, {
    length?: string | number;
    onlengthChange?: (args: PropertyChangeData) => void;
}>
interface LengthValidatorAttributes extends TLengthValidatorAttributes {}

// common.d.ts
type TMaximumLengthValidatorAttributes = Override<LengthValidatorAttributes, {

}>
interface MaximumLengthValidatorAttributes extends TMaximumLengthValidatorAttributes {}

// common.d.ts
type TMinimumLengthValidatorAttributes = Override<LengthValidatorAttributes, {

}>
interface MinimumLengthValidatorAttributes extends TMinimumLengthValidatorAttributes {}

// common.d.ts
type TNonEmptyValidatorAttributes = Override<PropertyValidatorAttributes, {

}>
interface NonEmptyValidatorAttributes extends TNonEmptyValidatorAttributes {}

// common.d.ts
type TPhoneValidatorAttributes = Override<PropertyValidatorAttributes, {

}>
interface PhoneValidatorAttributes extends TPhoneValidatorAttributes {}

// common.d.ts
type TPropertyEditorAttributes = Override<ViewAttributes, {
    android?: any;
    editorCore?: any;
    ios?: any;
    label?: any;
    onparamsChange?: (args: PropertyChangeData) => void;
    onpropertyEditorStyleChange?: (args: PropertyChangeData) => void;
    ontypeChange?: (args: PropertyChangeData) => void;
    params?: string | PropertyEditorParams;
    propertyEditorStyle?: string | PropertyEditorStyle;
    type?: DataFormEditorType;
}>
interface PropertyEditorAttributes extends TPropertyEditorAttributes {}

// common.d.ts
type TPropertyEditorParamsAttributes = Override<ViewBaseAttributes, {
    maximum?: string | any;
    minimum?: string | any;
    onmaximumChange?: (args: PropertyChangeData) => void;
    onminimumChange?: (args: PropertyChangeData) => void;
    onstepChange?: (args: PropertyChangeData) => void;
    step?: string | number;
}>
interface PropertyEditorParamsAttributes extends TPropertyEditorParamsAttributes {}

// common.d.ts
type TPropertyEditorStyleAttributes = Override<DataFormStyleBaseAttributes, {
    editorHorizontalOffset?: string | number;
    editorVerticalOffset?: string | number;
    labelHidden?: string | boolean;
    labelHorizontalOffset?: string | number;
    labelPosition?: DataFormLabelPosition;
    labelVerticalOffset?: string | number;
    labelWidth?: string | number;
    oneditorHorizontalOffsetChange?: (args: PropertyChangeData) => void;
    oneditorVerticalOffsetChange?: (args: PropertyChangeData) => void;
    onlabelHiddenChange?: (args: PropertyChangeData) => void;
    onlabelHorizontalOffsetChange?: (args: PropertyChangeData) => void;
    onlabelPositionChange?: (args: PropertyChangeData) => void;
    onlabelVerticalOffsetChange?: (args: PropertyChangeData) => void;
    onlabelWidthChange?: (args: PropertyChangeData) => void;
}>
interface PropertyEditorStyleAttributes extends TPropertyEditorStyleAttributes {}

// common.d.ts
type TPropertyGroupAttributes = Override<ViewBaseAttributes, {
    collapsed?: string | boolean;
    collapsible?: string | boolean;
    hidden?: string | boolean;
    layout?: string | DataFormLayout;
    name?: string;
    oncollapsedChange?: (args: PropertyChangeData) => void;
    oncollapsibleChange?: (args: PropertyChangeData) => void;
    onhiddenChange?: (args: PropertyChangeData) => void;
    onlayoutChange?: (args: PropertyChangeData) => void;
    onnameChange?: (args: PropertyChangeData) => void;
    onpropertiesChange?: (args: PropertyChangeData) => void;
    ontitleHiddenChange?: (args: PropertyChangeData) => void;
    ontitleStyleChange?: (args: PropertyChangeData) => void;
    properties?: string | EntityProperty[];
    titleHidden?: string | boolean;
    titleStyle?: string | GroupTitleStyle;
}>
interface PropertyGroupAttributes extends TPropertyGroupAttributes {}

// common.d.ts
type TPropertyValidatorAttributes = Override<ViewBaseAttributes, {
    android?: any;
    errorMessage?: string;
    ios?: any;
    onerrorMessageChange?: (args: PropertyChangeData) => void;
    onsuccessMessageChange?: (args: PropertyChangeData) => void;
    successMessage?: string;
}>
interface PropertyValidatorAttributes extends TPropertyValidatorAttributes {}

// common.d.ts
type TRadDataFormAttributes = Override<ViewAttributes, {
    commitMode?: DataFormCommitMode;
    editedObject?: any;
    groups?: string | PropertyGroup[];
    isReadOnly?: string | boolean;
    metadata?: string | any;
    oncommitModeChange?: (args: PropertyChangeData) => void;
    ongroupsChange?: (args: PropertyChangeData) => void;
    onisReadOnlyChange?: (args: PropertyChangeData) => void;
    onmetadataChange?: (args: PropertyChangeData) => void;
    onpropertiesChange?: (args: PropertyChangeData) => void;
    onsourceChange?: (args: PropertyChangeData) => void;
    onvalidationModeChange?: (args: PropertyChangeData) => void;
    properties?: string | EntityProperty[];
    source?: string | any;
    validationMode?: DataFormValidationMode;
}>
interface RadDataFormAttributes extends TRadDataFormAttributes {}

// common.d.ts
type TRangeValidatorAttributes = Override<PropertyValidatorAttributes, {
    maximum?: string | number;
    minimum?: string | number;
    onmaximumChange?: (args: PropertyChangeData) => void;
    onminimumChange?: (args: PropertyChangeData) => void;
}>
interface RangeValidatorAttributes extends TRangeValidatorAttributes {}

// common.d.ts
type TRegExValidatorAttributes = Override<PropertyValidatorAttributes, {
    onregExChange?: (args: PropertyChangeData) => void;
    regEx?: string;
}>
interface RegExValidatorAttributes extends TRegExValidatorAttributes {}


interface IntrinsicElements {
        customPropertyEditor: CustomPropertyEditorAttributes;
        dataFormEditorCore: DataFormEditorCoreAttributes;
        dataFormEditorLabel: DataFormEditorLabelAttributes;
        dataFormGridLayout: DataFormGridLayoutAttributes;
        dataFormLayout: DataFormLayoutAttributes;
        dataFormStackLayout: DataFormStackLayoutAttributes;
        emailValidator: EmailValidatorAttributes;
        entityProperty: EntityPropertyAttributes;
        groupTitleStyle: GroupTitleStyleAttributes;
        isTrueValidator: IsTrueValidatorAttributes;
        lengthValidator: LengthValidatorAttributes;
        maximumLengthValidator: MaximumLengthValidatorAttributes;
        minimumLengthValidator: MinimumLengthValidatorAttributes;
        nonEmptyValidator: NonEmptyValidatorAttributes;
        phoneValidator: PhoneValidatorAttributes;
        propertyEditor: PropertyEditorAttributes;
        propertyEditorParams: PropertyEditorParamsAttributes;
        propertyEditorStyle: PropertyEditorStyleAttributes;
        propertyGroup: PropertyGroupAttributes;
        propertyValidator: PropertyValidatorAttributes;
        radDataForm: RadDataFormAttributes;
        rangeValidator: RangeValidatorAttributes;
        regExValidator: RegExValidatorAttributes; 
}


}
}
