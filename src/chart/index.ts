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


class PieChart extends NativeViewElementNode<RadPieChart> {
    constructor() {
        super('radPieChart', RadPieChart)
    }
}

class CartesianChart extends NativeViewElementNode<RadCartesianChart> {
    constructor() {
        super('radCartesianChart', RadCartesianChart)
    }

    onInsertedChild(childNode: ViewNode, index: number) {
        if (childNode instanceof NativeElementNode) {
            if (childNode.propAttribute.toLocaleLowerCase() == "series") {
                let currentSeries = this.nativeView.series;
                if (!(currentSeries instanceof ObservableArray)) {
                    this.nativeView.series = new ObservableArray(childNode.nativeElement);
                } else {
                    this.nativeView.series.push(childNode.nativeElement)
                }
                //short circuit any other processing
                return;
            }

            if (childNode.propAttribute.toLocaleLowerCase() == "annotations") {
                let current = this.nativeView.annotations;
                if (!(current instanceof ObservableArray)) {
                    this.nativeView.annotations = new ObservableArray(childNode.nativeElement);
                } else {
                    this.nativeView.annotations.push(childNode.nativeElement)
                }
                //short circuit any other processing
                return;
            }

            if (childNode.propAttribute.toLocaleLowerCase() == "palettes") {
                let current = this.nativeView.palettes;
                if (!(current instanceof ObservableArray)) {
                    this.nativeView.palettes = new ObservableArray(childNode.nativeElement);
                } else {
                    this.nativeView.palettes.push(childNode.nativeElement)
                }
                //short circuit any other processing
                return;
            }
        }
        super.onInsertedChild(childNode, index);
    }
    
    onRemovedChild(childNode: ViewNode) {
        if (childNode instanceof NativeElementNode) {
            if (childNode.propAttribute.toLocaleLowerCase() == "series") {
                let currentSeries = this.nativeView.series;
                if ((currentSeries instanceof ObservableArray)) {
                    let idx = currentSeries.indexOf(childNode.nativeElement);
                    if (idx >= 0) currentSeries.splice(idx, 1);
                }
                //short circuit any other processing
                return;
            }

            if (childNode.propAttribute.toLocaleLowerCase() == "annotations") {
                let current = this.nativeView.annotations;
                if ((current instanceof ObservableArray)) {
                    let idx = current.indexOf(childNode.nativeElement);
                    if (idx >= 0) current.splice(idx, 1);
                }
                //short circuit any other processing
                return;
            }

            if (childNode.propAttribute.toLocaleLowerCase() == "palettes") {
                let current = this.nativeView.palettes;
                if ((current instanceof ObservableArray)) {
                    let idx = current.indexOf(childNode.nativeElement);
                    if (idx >= 0) current.splice(idx, 1);
                }
                //short circuit any other processing
                return;
            }
        }
        super.onRemovedChild(childNode);
    }
}

class SNPalette extends NativeElementNode<Palette> {
    constructor() {
        super('pallete', Palette)
    }

    onInsertedChild(childNode: ViewNode, index: number) {
        if (childNode instanceof NativeElementNode) {
            if (childNode.propAttribute.toLocaleLowerCase() == "entries") {
                let current = this.nativeElement.entries;
                if (!(current instanceof ObservableArray)) {
                    this.nativeElement.entries = new ObservableArray(childNode.nativeElement);
                } else {
                    this.nativeElement.entries.push(childNode.nativeElement)
                }
                //short circuit any other processing
                return;
            }
        }
        super.onInsertedChild(childNode, index);
    }
    
    onRemovedChild(childNode: ViewNode) {
        if (childNode instanceof NativeElementNode) {
            if (childNode.propAttribute.toLocaleLowerCase() == "entries") {
                let current = this.nativeElement.entries;
                if ((current instanceof ObservableArray)) {
                    let idx = current.indexOf(childNode.nativeElement);
                    if (idx >= 0) current.splice(idx, 1);
                }
                //short circuit any other processing
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