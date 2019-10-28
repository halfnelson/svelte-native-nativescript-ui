import { registerElement, registerNativeConfigElement, NativeElementNode, NativeElementPropType, NativeElementPropConfig } from 'svelte-native/dom'
import { NativeViewElementNode } from "svelte-native/dom";
import { RadDataForm, DataFormStackLayout, DataFormGridLayout, EntityProperty, PropertyEditor, PropertyEditorParams, PropertyEditorStyle, PropertyGroup, EmailValidator, IsTrueValidator, NonEmptyValidator, MaximumLengthValidator, MinimumLengthValidator, PhoneValidator, RangeValidator, RegExValidator } from 'nativescript-ui-dataform';

export default class RadDataFormElement extends NativeViewElementNode<RadDataForm> {
    constructor() {
        super('radDataForm',  RadDataForm, null, { "groups": NativeElementPropType.Array, "properties": NativeElementPropType.Array});
    }

    getPropertyByName(prop: string) {
        return this.nativeView.getPropertyByName(prop);
    }
    notifyValidated(prop: string, validated: boolean) {
        return this.nativeView.notifyValidated(prop, validated);
    }
    commitAll() {
        return this.nativeView.commitAll();
    }
    validateAll() {
        return this.nativeView.validateAll();
    }

    static register() {

        const registerConfigElement = (tag: string, native: new () => any, setsParentProp: string = null, propconfig: NativeElementPropConfig = {}) => 
            registerNativeConfigElement(tag, () => native, setsParentProp, propconfig)
            
        registerConfigElement('DataFormStackLayout', DataFormStackLayout, "layout");
        registerConfigElement('DataFormGridLayout', DataFormGridLayout, "layout");
        registerConfigElement('EntityProperty', EntityProperty, "properties", { "validators": NativeElementPropType.Array});
        registerConfigElement('PropertyEditor', PropertyEditor, "editor");
        registerConfigElement('PropertyEditorParams', PropertyEditorParams, "params");
        registerConfigElement('PropertyEditorStyle', PropertyEditorStyle, "propertyEditorStyle");
        registerConfigElement('PropertyGroup', PropertyGroup, "groups", { "properties": NativeElementPropType.Array });
        registerConfigElement('EmailValidator', EmailValidator, "validators");
        registerConfigElement('IsTrueValidator', IsTrueValidator, "validators");
        registerConfigElement('NonEmptyValidator', NonEmptyValidator, "validators");
        registerConfigElement('MaximumLengthValidator', MaximumLengthValidator, "validators");
        registerConfigElement('MinimumLengthValidator', MinimumLengthValidator, "validators");
        registerConfigElement('PhoneValidator', PhoneValidator, "validators");
        registerConfigElement('RangeValidator', RangeValidator, "validators");
        registerConfigElement('RegExValidator', RegExValidator, "validators");

        registerElement('radDataForm', () => new RadDataFormElement());
    }
}
