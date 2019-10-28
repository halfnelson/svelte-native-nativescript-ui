import { registerElement, registerNativeConfigElement, NativeElementPropType, NativeElementNode, NativeElementPropConfig } from 'svelte-native/dom'
import { NativeViewElementNode } from "svelte-native/dom";
import { RadRadialGauge, RadialScale, RadialNeedle, RadialBarIndicator, ScaleStyle, BarIndicatorStyle } from 'nativescript-ui-gauge';


export default class Gauges {
    static register() {
        const registerConfigElement = (tag: string, native: new () => any, setsParentProp: string = null, propconfig: NativeElementPropConfig = {}) => 
            registerNativeConfigElement(tag, () => native, setsParentProp, propconfig)
            
        registerElement('radRadialGauge', () => new NativeViewElementNode<RadRadialGauge>('radRadialGauge', RadRadialGauge, null, { "scales": NativeElementPropType.ObservableArray } ));
        registerConfigElement('radialScale', RadialScale, "scales", { "indicators": NativeElementPropType.ObservableArray })
        registerConfigElement('radialNeedle', RadialNeedle, "indicators")
        registerConfigElement('radialBarIndicator', RadialBarIndicator, "indicators")
        registerConfigElement('scaleStyle', ScaleStyle, "scaleStyle")
        registerConfigElement('barIndicatorStyle', BarIndicatorStyle, "indicatorStyle")
    }
}