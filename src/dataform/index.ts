import { registerElement, NativeElementNode, NativeElementPropType, NativeElementPropConfig } from 'svelte-native/dom'
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

        const registerAs = (tag: string, native: new () => any, setsParentProp: string = null, propconfig: NativeElementPropConfig = {}) => 
            registerElement(tag, () => new NativeElementNode(tag, native, setsParentProp, propconfig))
            
        registerAs('DataFormStackLayout', DataFormStackLayout, "layout");
        registerAs('DataFormGridLayout', DataFormGridLayout, "layout");
        registerAs('EntityProperty', EntityProperty, "properties", { "validators": NativeElementPropType.Array});
        registerAs('PropertyEditor', PropertyEditor, "editor");
        registerAs('PropertyEditorParams', PropertyEditorParams, "params");
        registerAs('PropertyEditorStyle', PropertyEditorStyle, "propertyEditorStyle");
        registerAs('PropertyGroup', PropertyGroup, "groups", { "properties": NativeElementPropType.Array });
        registerAs('EmailValidator', EmailValidator, "validators");
        registerAs('IsTrueValidator', IsTrueValidator, "validators");
        registerAs('NonEmptyValidator', NonEmptyValidator, "validators");
        registerAs('MaximumLengthValidator', MaximumLengthValidator, "validators");
        registerAs('MinimumLengthValidator', MinimumLengthValidator, "validators");
        registerAs('PhoneValidator', PhoneValidator, "validators");
        registerAs('RangeValidator', RangeValidator, "validators");
        registerAs('RegExValidator', RegExValidator, "validators");

        registerElement('radDataForm', () => new RadDataFormElement());
    }
}
