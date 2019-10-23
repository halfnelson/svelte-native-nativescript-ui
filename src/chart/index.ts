import { registerElement, NativeElementNode, ViewNode } from 'svelte-native/dom'
import { NativeViewElementNode } from "svelte-native/dom";
import { RadPieChart, RadCartesianChart, PieSeries, DonutSeries, 
         LineSeries, SplineSeries, SplineAreaSeries, 
         AreaSeries, BarSeries, RangeBarSeries,
         BubbleSeries, ScatterBubbleSeries,
         ScatterSeries, CandlestickSeries,
         OhlcSeries,
         CategoricalAxis, DateTimeCategoricalAxis, DateTimeContinuousAxis,
         LinearAxis, LogarithmicAxis,
         RadCartesianChartGrid, RadLegendView,
         Palette, PaletteEntry, Trackball,
         ChartGridLineAnnotation, ChartPlotBandAnnotation 
} from 'nativescript-ui-chart';

import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { View } from 'tns-core-modules/ui/core/view';

function setOnArrayProp(parent: any, value: any,  propName: string) {
    let current = parent[propName];
    if (!(current instanceof ObservableArray)) {
        parent[propName] = new ObservableArray(value);
    } else {
        current.push(value)
    }
}

function removeFromArrayProp(parent: any, value: any,  propName: string) {
    let current = parent[propName];
    if ((current instanceof ObservableArray)) {
        let idx = current.indexOf(value);
        if (idx >= 0) current.splice(idx, 1);
    }
}


class BaseChart<T extends View> extends NativeViewElementNode<T> {
    constructor(tagName: string, viewClass: new () => T) {
        super(tagName, viewClass)
    }

    onInsertedChild(childNode: ViewNode, index: number) {
        if (childNode instanceof NativeElementNode) {
            let propAttr = childNode.propAttribute.toLowerCase();
            for (var arrayProp of ["series", "annotations", "palettes"]) {
                if (propAttr == arrayProp) {
                    setOnArrayProp(this.nativeElement, childNode.nativeElement, propAttr)
                    return;
                }
            }
        }
        super.onInsertedChild(childNode, index);
    }
    
    onRemovedChild(childNode: ViewNode) {
        if (childNode instanceof NativeElementNode) {
            let propAttr = childNode.propAttribute.toLowerCase();
            for (var arrayProp of ["series", "annotations", "palettes"]) {
                if (propAttr == arrayProp) {
                    removeFromArrayProp(this.nativeElement, childNode.nativeElement, propAttr)
                    return;
                }
            }
        }
        super.onRemovedChild(childNode);
    }
}


class PieChart extends BaseChart<RadPieChart> {
    constructor() {
        super('radPieChart', RadPieChart)
    }
}

class CartesianChart extends BaseChart<RadCartesianChart> {
    constructor() {
        super('radCartesianChart', RadCartesianChart)
    }
}

class SNPalette extends NativeElementNode<Palette> {
    constructor() {
        super('pallete', Palette)
    }

    onInsertedChild(childNode: ViewNode, index: number) {
        if (childNode instanceof NativeElementNode) {
            if (childNode.propAttribute.toLowerCase() == "entries") {
                setOnArrayProp(this.nativeElement, childNode.nativeElement, "entries")
                return;
            }
        }
        super.onInsertedChild(childNode, index);
    }
    
    onRemovedChild(childNode: ViewNode) {
        if (childNode instanceof NativeElementNode) {
            if (childNode.propAttribute.toLowerCase() == "entries") {
                removeFromArrayProp(this.nativeElement, childNode.nativeElement, "entries")
                return;
            }
        }
        super.onRemovedChild(childNode);
    }
}

export default class Charts {
    static register() {

        const registerAs = (tag: string, native: new () => any) => 
            registerElement(tag, () => new NativeElementNode(tag, native))

        //chart types
        registerElement('radPieChart', () => new PieChart());
        registerElement('radCartesianChart', () => new CartesianChart());
 
        //series types
        registerAs('pieSeries', PieSeries);
        registerAs('donutSeries', DonutSeries);
        registerAs('lineSeries', LineSeries)
        registerAs('splineSeries', SplineSeries)
        registerAs('splineAreaSeries', SplineAreaSeries)
        registerAs('areaSeries', AreaSeries)
        registerAs('barSeries', BarSeries)
        registerAs('rangeBarSeries', RangeBarSeries)
        registerAs('bubbleSeries', BubbleSeries)
        registerAs('scatterBubbleSeries', ScatterBubbleSeries)
        registerAs('scatterSeries', ScatterSeries)
        registerAs('candlestickSeries', CandlestickSeries)
        registerAs('OhlcSeries', OhlcSeries)

        //axes types
        registerAs('categoricalAxis', CategoricalAxis)
        registerAs('dateTimeCategoricalAxis', DateTimeCategoricalAxis)
        registerAs('dateTimeContinuousAxis', DateTimeContinuousAxis)
        registerAs('linearAxis', LinearAxis)
        registerAs('logarithmicAxis', LogarithmicAxis)

        //grid
        registerAs('radCartesianChartGrid', RadCartesianChartGrid)

        //legend
        registerAs('radLegendView', RadLegendView)

        //palette
        registerAs('paletteEntry', PaletteEntry)
        registerElement('palette', () => new SNPalette())

        //Trackball
        registerAs('trackball', Trackball)

        //Annotations
        registerAs('chartGridLineAnnotation', ChartGridLineAnnotation)
        registerAs('chartPlotBandAnnotation', ChartPlotBandAnnotation)
    }
}