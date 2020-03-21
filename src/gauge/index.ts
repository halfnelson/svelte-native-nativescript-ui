import { registerElement, registerNativeConfigElement, NativeElementPropType, NativeElementNode, NativeElementPropConfig, ViewNode } from 'svelte-native/dom'
import { NativeViewElementNode } from "svelte-native/dom";
import { RadRadialGauge, RadialScale, RadialNeedle, RadialBarIndicator, ScaleStyle, BarIndicatorStyle } from 'nativescript-ui-gauge';

class RadialScaleElement extends NativeElementNode<RadialScale> {
    onInsertedChild(childNode: ViewNode, index: number) {
        super.onInsertedChild(childNode, index);
        let gauge = this.parentNode as any;
        if (gauge && gauge.nativeElement &&  gauge.nativeElement.nativeObject && gauge.nativeElement.reloadScales) {
            gauge.nativeElement.reloadScales();
        }
    }
    onRemovedChild(childNode: ViewNode) {
        super.onRemovedChild(childNode);
        let gauge = this.parentNode as any;
        if (gauge && gauge.nativeElement &&  gauge.nativeElement.nativeObject && gauge.nativeElement.reloadScales) {
            gauge.nativeElement.reloadScales();
        }
    }
}


export default class Gauges {
    static register() {
        const registerConfigElement = (tag: string, native: new () => any, setsParentProp: string = null, propconfig: NativeElementPropConfig = {}) => 
            registerNativeConfigElement(tag, () => native, setsParentProp, propconfig)
            
        registerElement('radRadialGauge', () => new NativeViewElementNode<RadRadialGauge>('radRadialGauge', RadRadialGauge, null, { "scales": NativeElementPropType.ObservableArray } ));
        registerElement('radialScale', () => new RadialScaleElement("radialScale", RadialScale, "scales",  { "indicators": NativeElementPropType.ObservableArray }));
        //registerConfigElement('radialScale', RadialScale, "scales", { "indicators": NativeElementPropType.ObservableArray })
        registerConfigElement('radialNeedle', RadialNeedle, "indicators")
        registerConfigElement('radialBarIndicator', RadialBarIndicator, "indicators")
        registerConfigElement('scaleStyle', ScaleStyle, "scaleStyle")
        registerConfigElement('barIndicatorStyle', BarIndicatorStyle, "indicatorStyle")
    }
}