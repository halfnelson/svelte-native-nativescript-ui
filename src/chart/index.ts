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

class ChartSeries<T> extends NativeElementNode<T> {
    constructor(tagName: string, elClass: new () => T) {
        super(tagName, elClass)
    }

    // For some reason seriesName isn't defined as a "property" on series, so when we set the property, it is lowercase (due to svelte's forced downcasing)
    // we intercept and fix the case here.
    setAttribute(fullkey: string, value: any): void {
        if (fullkey.toLowerCase() == "seriesname") {
            fullkey = "seriesName";
        }
        super.setAttribute(fullkey, value);
    }
}


export default class Charts {
    static register() {

        const registerAs = (tag: string, native: new () => any) => 
            registerElement(tag, () => new NativeElementNode(tag, native))

        const registerSeries = (tag: string, native: new () => any) => 
            registerElement(tag, () => new ChartSeries(tag, native))

        //chart types
        registerElement('radPieChart', () => new PieChart());
        registerElement('radCartesianChart', () => new CartesianChart());
 
        //series types
        registerSeries('pieSeries', PieSeries);
        registerSeries('donutSeries', DonutSeries);
        registerSeries('lineSeries', LineSeries)
        registerSeries('splineSeries', SplineSeries)
        registerSeries('splineAreaSeries', SplineAreaSeries)
        registerSeries('areaSeries', AreaSeries)
        registerSeries('barSeries', BarSeries)
        registerSeries('rangeBarSeries', RangeBarSeries)
        registerSeries('bubbleSeries', BubbleSeries)
        registerSeries('scatterBubbleSeries', ScatterBubbleSeries)
        registerSeries('scatterSeries', ScatterSeries)
        registerSeries('candlestickSeries', CandlestickSeries)
        registerSeries('OhlcSeries', OhlcSeries)

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