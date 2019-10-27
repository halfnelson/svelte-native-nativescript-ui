import { registerElement, NativeElementNode } from 'svelte-native/dom'
import { NativeViewElementNode } from "svelte-native/dom";
import { RadDataForm, DataFormStackLayout, DataFormGridLayout, EntityProperty, PropertyEditor, PropertyEditorParams, PropertyEditorStyle, PropertyGroup, EmailValidator, IsTrueValidator, NonEmptyValidator, MaximumLengthValidator, MinimumLengthValidator, PhoneValidator, RangeValidator, RegExValidator } from 'nativescript-ui-dataform';

export default class RadDataFormElement extends NativeViewElementNode<RadDataForm> {
    constructor() {
        super('radDataForm',  RadDataForm);
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

        const registerAs = (tag: string, native: new () => any) => 
            registerElement(tag, () => new NativeElementNode(tag, native))
            
        registerAs('DataFormStackLayout', DataFormStackLayout);
        registerAs('DataFormGridLayout', DataFormGridLayout);
        registerAs('EntityProperty', EntityProperty);
        registerAs('PropertyEditor', PropertyEditor);
        registerAs('PropertyEditorParams', PropertyEditorParams);
        registerAs('PropertyEditorStyle', PropertyEditorStyle);
        registerAs('PropertyGroup', PropertyGroup);
        registerAs('EmailValidator', EmailValidator);
        registerAs('IsTrueValidator', IsTrueValidator);
        registerAs('NonEmptyValidator', NonEmptyValidator);
        registerAs('MaximumLengthValidator', MaximumLengthValidator);
        registerAs('MinimumLengthValidator', MinimumLengthValidator);
        registerAs('PhoneValidator', PhoneValidator);
        registerAs('RangeValidator', RangeValidator);
        registerAs('RegExValidator', RegExValidator);

        registerElement('radDataForm', () => new RadDataFormElement());
    }
}
