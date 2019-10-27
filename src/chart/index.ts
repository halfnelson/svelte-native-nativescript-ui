import { registerElement, NativeElementNode } from 'svelte-native/dom'
import { NativeViewElementNode, NativeElementPropType as PropType } from "svelte-native/dom";
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

import { View } from 'tns-core-modules/ui/core/view';

class BaseChart<T extends View> extends NativeViewElementNode<T> {
    constructor(tagName: string, viewClass: new () => T) {
        super(tagName, viewClass, { "series": PropType.ObservableArray, 
                                    "annotations": PropType.ObservableArray, 
                                    "palettes": PropType.ObservableArray});
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
        super('pallete', Palette, { "entries": PropType.ObservableArray })
    }
}

class ChartSeries<T> extends NativeElementNode<T> {
    constructor(tagName: string, elClass: new () => T) {
        super(tagName, elClass, { "seriesName": PropType.Value })
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