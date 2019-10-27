import { registerElement, NativeElementPropType, NativeElementNode, NativeElementPropConfig } from 'svelte-native/dom'
import { NativeViewElementNode } from "svelte-native/dom";
import { RadRadialGauge, RadialScale, RadialNeedle, RadialBarIndicator, ScaleStyle, BarIndicatorStyle } from 'nativescript-ui-gauge';


export default class Gauges {
    static register() {
        const registerAs = (tag: string, native: new () => any, setsParentProp: string = null, propconfig: NativeElementPropConfig = {}) => 
            registerElement(tag, () => new NativeElementNode(tag, native, setsParentProp, propconfig))
            
        registerElement('radRadialGauge', () => new NativeViewElementNode<RadRadialGauge>('radRadialGauge', RadRadialGauge, null, { "scales": NativeElementPropType.ObservableArray } ));
        registerAs('radialScale', RadialScale, "scales", { "indicators": NativeElementPropType.ObservableArray })
        registerAs('radialNeedle', RadialNeedle, "indicators")
        registerAs('radialBarIndicator', RadialBarIndicator, "indicators")
        registerAs('scaleStyle', ScaleStyle, "scaleStyle")
        registerAs('barIndicatorStyle', BarIndicatorStyle, "indicatorStyle")


    }
}