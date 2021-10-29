export {} //Ensure this is a module
type CartesianAxis = import("nativescript-ui-chart").CartesianAxis;
type ChartAnnotationZPosition = import("nativescript-ui-chart").ChartAnnotationZPosition;
type ChartAxisDateTimeComponent = import("nativescript-ui-chart").ChartAxisDateTimeComponent;
type ChartAxisHorizontalLocation = import("nativescript-ui-chart").ChartAxisHorizontalLocation;
type ChartAxisLabelFitMode = import("nativescript-ui-chart").ChartAxisLabelFitMode;
type ChartAxisLabelLayoutMode = import("nativescript-ui-chart").ChartAxisLabelLayoutMode;
type ChartAxisLabelVisibility = import("nativescript-ui-chart").ChartAxisLabelVisibility;
type ChartAxisPlotMode = import("nativescript-ui-chart").ChartAxisPlotMode;
type ChartAxisVerticalLocation = import("nativescript-ui-chart").ChartAxisVerticalLocation;
type ChartBaseValueMapper = import("nativescript-ui-chart/initializers/chart-initializers.common").ChartBaseValueMapper;
type ChartFontStyle = import("nativescript-ui-chart").ChartFontStyle;
type ChartLegendOffsetOrigin = import("nativescript-ui-chart").ChartLegendOffsetOrigin;
type ChartLegendPosition = import("nativescript-ui-chart").ChartLegendPosition;
type ChartPaletteSeriesState = import("nativescript-ui-chart").ChartPaletteSeriesState;
type ChartPublicEnumChartAxisLabelFitMode = import("nativescript-ui-chart/misc/chart-public-enum").ChartAxisLabelFitMode;
type ChartPublicEnumChartAxisLabelLayoutMode = import("nativescript-ui-chart/misc/chart-public-enum").ChartAxisLabelLayoutMode;
type ChartSelectionMode = import("nativescript-ui-chart").ChartSelectionMode;
type ChartSeriesPaletteMode = import("nativescript-ui-chart").ChartSeriesPaletteMode;
type ChartSeriesSelectionMode = import("nativescript-ui-chart").ChartSeriesSelectionMode;
type ChartSeriesStackMode = import("nativescript-ui-chart").ChartSeriesStackMode;
type ChartTrackballSnapMode = import("nativescript-ui-chart").ChartTrackballSnapMode;
type Color = import("@nativescript/core/color").Color;
type ObservableArray<T1> = import("@nativescript/core/data/observable-array").ObservableArray<T1>;
type Palette = import("nativescript-ui-chart").Palette;
type PaletteEntry = import("nativescript-ui-chart").PaletteEntry;
type PointLabelStyle = import("nativescript-ui-chart").PointLabelStyle;
type Property<T1, T2> = import("@nativescript/core/ui/core/properties").Property<T1, T2>;
type PropertyChangeData = import("@nativescript/core/data/observable").PropertyChangeData;
type RadCartesianChartGrid = import("nativescript-ui-chart").RadCartesianChartGrid;
type RadLegendView = import("nativescript-ui-chart").RadLegendView;
type Trackball = import("nativescript-ui-chart").Trackball;
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// index.d.ts
type TAreaSeriesAttributes = Override<CategoricalSeriesAttributes, {

}>
interface AreaSeriesAttributes extends TAreaSeriesAttributes {}

// index.d.ts
type TBarSeriesAttributes = Override<CategoricalSeriesAttributes, {
    maxBarSize?: string | number;
    minBarSize?: string | number;
    onmaxBarSizeChange?: (args: PropertyChangeData) => void;
    onminBarSizeChange?: (args: PropertyChangeData) => void;
}>
interface BarSeriesAttributes extends TBarSeriesAttributes {}

// index.d.ts
type TBubbleSeriesAttributes = Override<CategoricalSeriesAttributes, {
    bubbleScale?: string | number;
    bubbleSizeProperty?: string;
    onbubbleScaleChange?: (args: PropertyChangeData) => void;
    onbubbleSizePropertyChange?: (args: PropertyChangeData) => void;
}>
interface BubbleSeriesAttributes extends TBubbleSeriesAttributes {}

// index.d.ts
type TCandlestickSeriesAttributes = Override<OhlcSeriesAttributes, {
    fillColors?: string | Color[];
    onfillColorsChange?: (args: PropertyChangeData) => void;
}>
interface CandlestickSeriesAttributes extends TCandlestickSeriesAttributes {}

// index.d.ts
type TCartesianAxisAttributes = Override<ViewBaseAttributes, {
    allowPan?: string | boolean;
    allowZoom?: string | boolean;
    hidden?: string | boolean;
    horizontalLocation?: ChartAxisHorizontalLocation;
    id?: string;
    ios?: any;
    labelBackgroundColor?: string | Color;
    labelBorderColor?: string | Color;
    labelBorderWidth?: string | number;
    labelFitMode?: ChartAxisLabelFitMode;
    labelFormat?: string | any;
    labelLayoutMode?: ChartAxisLabelLayoutMode;
    labelLayoutModeProperty?: Property<CartesianAxis, ChartAxisLabelLayoutMode>;
    labelMargin?: string | any;
    labelRotationAngle?: string | any;
    labelSize?: string | any;
    labelTextColor?: string | Color;
    lineColor?: string | Color;
    lineHidden?: string | boolean;
    lineThickness?: string | number;
    onallowPanChange?: (args: PropertyChangeData) => void;
    onallowZoomChange?: (args: PropertyChangeData) => void;
    onhiddenChange?: (args: PropertyChangeData) => void;
    onhorizontalLocationChange?: (args: PropertyChangeData) => void;
    onidChange?: (args: PropertyChangeData) => void;
    onlabelBackgroundColorChange?: (args: PropertyChangeData) => void;
    onlabelBorderColorChange?: (args: PropertyChangeData) => void;
    onlabelBorderWidthChange?: (args: PropertyChangeData) => void;
    onlabelFitModeChange?: (args: PropertyChangeData) => void;
    onlabelFormatChange?: (args: PropertyChangeData) => void;
    onlabelLayoutModeChange?: (args: PropertyChangeData) => void;
    onlabelMarginChange?: (args: PropertyChangeData) => void;
    onlabelRotationAngleChange?: (args: PropertyChangeData) => void;
    onlabelSizeChange?: (args: PropertyChangeData) => void;
    onlabelTextColorChange?: (args: PropertyChangeData) => void;
    onlineColorChange?: (args: PropertyChangeData) => void;
    onlineHiddenChange?: (args: PropertyChangeData) => void;
    onlineThicknessChange?: (args: PropertyChangeData) => void;
    onticksColorChange?: (args: PropertyChangeData) => void;
    onticksHiddenChange?: (args: PropertyChangeData) => void;
    onticksLengthChange?: (args: PropertyChangeData) => void;
    onticksOffsetChange?: (args: PropertyChangeData) => void;
    onticksThicknessChange?: (args: PropertyChangeData) => void;
    onverticalLocationChange?: (args: PropertyChangeData) => void;
    ticksColor?: string | Color;
    ticksHidden?: string | boolean;
    ticksLength?: string | number;
    ticksOffset?: string | number;
    ticksThickness?: string | number;
    verticalLocation?: ChartAxisVerticalLocation;
}>
interface CartesianAxisAttributes extends TCartesianAxisAttributes {}

// index.d.ts
type TCartesianChartAnnotationAttributes = Override<ViewBaseAttributes, {
    axisId?: string;
    hidden?: string | boolean;
    onaxisIdChange?: (args: PropertyChangeData) => void;
    onhiddenChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeDashPatternChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    onzPositionChange?: (args: PropertyChangeData) => void;
    strokeColor?: string | Color;
    strokeDashPattern?: string;
    strokeWidth?: string | number;
    zPosition?: ChartAnnotationZPosition;
}>
interface CartesianChartAnnotationAttributes extends TCartesianChartAnnotationAttributes {}

// index.d.ts
type TCartesianSeriesAttributes = Override<ChartSeriesAttributes, {
    fillColor?: string | Color;
    horizontalAxis?: string | CartesianAxis;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onhorizontalAxisChange?: (args: PropertyChangeData) => void;
    onpaletteModeChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    onverticalAxisChange?: (args: PropertyChangeData) => void;
    paletteMode?: ChartSeriesPaletteMode;
    strokeColor?: string | Color;
    strokeWidth?: string | number;
    verticalAxis?: string | CartesianAxis;
}>
interface CartesianSeriesAttributes extends TCartesianSeriesAttributes {}

// index.d.ts
type TCategoricalAxisAttributes = Override<CartesianAxisAttributes, {
    firstLabelVisibility?: ChartAxisLabelVisibility;
    lastLabelVisibility?: ChartAxisLabelVisibility;
    majorTickInterval?: string | number;
    onfirstLabelVisibilityChange?: (args: PropertyChangeData) => void;
    onlastLabelVisibilityChange?: (args: PropertyChangeData) => void;
    onmajorTickIntervalChange?: (args: PropertyChangeData) => void;
    onplotModeChange?: (args: PropertyChangeData) => void;
    plotMode?: ChartAxisPlotMode;
}>
interface CategoricalAxisAttributes extends TCategoricalAxisAttributes {}

// index.d.ts
type TCategoricalSeriesAttributes = Override<CartesianSeriesAttributes, {
    categoryProperty?: string;
    oncategoryPropertyChange?: (args: PropertyChangeData) => void;
    onstackModeChange?: (args: PropertyChangeData) => void;
    stackMode?: ChartSeriesStackMode;
}>
interface CategoricalSeriesAttributes extends TCategoricalSeriesAttributes {}

// visualization\views\chart-axis.common.d.ts
type TChartAxisLabelAttributes = Override<ViewAttributes, {
    fitMode?: ChartPublicEnumChartAxisLabelFitMode;
    format?: string;
    layoutMode?: ChartPublicEnumChartAxisLabelLayoutMode;
    onfitModeChange?: (args: PropertyChangeData) => void;
    onformatChange?: (args: PropertyChangeData) => void;
    onlayoutModeChange?: (args: PropertyChangeData) => void;
    onrotationAngleChange?: (args: PropertyChangeData) => void;
    rotationAngle?: string | number;
}>
interface ChartAxisLabelAttributes extends TChartAxisLabelAttributes {}

// index.d.ts
type TChartGridLineAnnotationAttributes = Override<CartesianChartAnnotationAttributes, {
    onvalueChange?: (args: PropertyChangeData) => void;
    value?: string | any;
}>
interface ChartGridLineAnnotationAttributes extends TChartGridLineAnnotationAttributes {}

// index.d.ts
type TChartPlotBandAnnotationAttributes = Override<CartesianChartAnnotationAttributes, {
    fillColor?: string | Color;
    maxValue?: string | any;
    minValue?: string | any;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onmaxValueChange?: (args: PropertyChangeData) => void;
    onminValueChange?: (args: PropertyChangeData) => void;
}>
interface ChartPlotBandAnnotationAttributes extends TChartPlotBandAnnotationAttributes {}

// index.d.ts
type TChartSeriesAttributes = Override<ViewBaseAttributes, {
    android?: any;
    ios?: any;
    items?: string | any;
    labelStyle?: string | PointLabelStyle;
    legendTitle?: string;
    onitemsChange?: (args: PropertyChangeData) => void;
    onlabelStyleChange?: (args: PropertyChangeData) => void;
    onlegendTitleChange?: (args: PropertyChangeData) => void;
    onselectionModeChange?: (args: PropertyChangeData) => void;
    onshowLabelsChange?: (args: PropertyChangeData) => void;
    onvalueChange?: (args: PropertyChangeData) => void;
    onvaluePropertyChange?: (args: PropertyChangeData) => void;
    selectionMode?: ChartSeriesSelectionMode;
    seriesName?: string;
    showLabels?: string | boolean;
    value?: string | any;
    valueProperty?: string | any;
}>
interface ChartSeriesAttributes extends TChartSeriesAttributes {}

// visualization\views\chart-series.common.d.ts
type TChartSeriesLabelAttributes = Override<ViewAttributes, {
    format?: string;
    onformatChange?: (args: PropertyChangeData) => void;
}>
interface ChartSeriesLabelAttributes extends TChartSeriesLabelAttributes {}

// index.d.ts
type TDateTimeCategoricalAxisAttributes = Override<CategoricalAxisAttributes, {
    dateFormat?: string;
    dateTimeComponent?: ChartAxisDateTimeComponent;
    ondateFormatChange?: (args: PropertyChangeData) => void;
    ondateTimeComponentChange?: (args: PropertyChangeData) => void;
}>
interface DateTimeCategoricalAxisAttributes extends TDateTimeCategoricalAxisAttributes {}

// index.d.ts
type TDateTimeContinuousAxisAttributes = Override<LinearAxisAttributes, {
    dateFormat?: string;
    majorStepUnit?: ChartAxisDateTimeComponent;
    ondateFormatChange?: (args: PropertyChangeData) => void;
    onmajorStepUnitChange?: (args: PropertyChangeData) => void;
    onplotModeChange?: (args: PropertyChangeData) => void;
    onsourceDateFormatChange?: (args: PropertyChangeData) => void;
    plotMode?: ChartAxisPlotMode;
    sourceDateFormat?: string;
}>
interface DateTimeContinuousAxisAttributes extends TDateTimeContinuousAxisAttributes {}

// index.d.ts
type TDonutSeriesAttributes = Override<PieSeriesAttributes, {
    innerRadiusFactor?: string | number;
    oninnerRadiusFactorChange?: (args: PropertyChangeData) => void;
}>
interface DonutSeriesAttributes extends TDonutSeriesAttributes {}

// index.d.ts
type TLineSeriesAttributes = Override<CategoricalSeriesAttributes, {

}>
interface LineSeriesAttributes extends TLineSeriesAttributes {}

// index.d.ts
type TLinearAxisAttributes = Override<CartesianAxisAttributes, {
    majorStep?: string | number;
    maximum?: string | any;
    minimum?: string | any;
    onmajorStepChange?: (args: PropertyChangeData) => void;
    onmaximumChange?: (args: PropertyChangeData) => void;
    onminimumChange?: (args: PropertyChangeData) => void;
}>
interface LinearAxisAttributes extends TLinearAxisAttributes {}

// index.d.ts
type TLogarithmicAxisAttributes = Override<LinearAxisAttributes, {
    exponentStep?: string | number;
    logarithmBase?: string | number;
    onexponentStepChange?: (args: PropertyChangeData) => void;
    onlogarithmBaseChange?: (args: PropertyChangeData) => void;
}>
interface LogarithmicAxisAttributes extends TLogarithmicAxisAttributes {}

// index.d.ts
type TOhlcSeriesAttributes = Override<CartesianSeriesAttributes, {
    closePropertyName?: string;
    highPropertyName?: string;
    lowPropertyName?: string;
    onclosePropertyNameChange?: (args: PropertyChangeData) => void;
    onhighPropertyNameChange?: (args: PropertyChangeData) => void;
    onlowPropertyNameChange?: (args: PropertyChangeData) => void;
    onopenPropertyNameChange?: (args: PropertyChangeData) => void;
    onstrokeColorsChange?: (args: PropertyChangeData) => void;
    openPropertyName?: string;
    strokeColors?: string | Color[];
}>
interface OhlcSeriesAttributes extends TOhlcSeriesAttributes {}

// index.d.ts
type TPaletteAttributes = Override<ViewBaseAttributes, {
    entries?: string | ObservableArray<PaletteEntry>;
    onentriesChange?: (args: PropertyChangeData) => void;
    onseriesNameChange?: (args: PropertyChangeData) => void;
    onseriesStateChange?: (args: PropertyChangeData) => void;
    seriesName?: string;
    seriesState?: ChartPaletteSeriesState;
}>
interface PaletteAttributes extends TPaletteAttributes {}

// index.d.ts
type TPaletteEntryAttributes = Override<ViewBaseAttributes, {
    fillColor?: string | Color;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    strokeColor?: string | Color;
    strokeWidth?: string | number;
}>
interface PaletteEntryAttributes extends TPaletteEntryAttributes {}

// index.d.ts
type TPieSeriesAttributes = Override<ChartSeriesAttributes, {
    endAngle?: string | number;
    expandRadius?: string | number;
    fillColors?: string | Color[];
    legendLabel?: string;
    onendAngleChange?: (args: PropertyChangeData) => void;
    onexpandRadiusChange?: (args: PropertyChangeData) => void;
    onfillColorsChange?: (args: PropertyChangeData) => void;
    onlegendLabelChange?: (args: PropertyChangeData) => void;
    onouterRadiusFactorChange?: (args: PropertyChangeData) => void;
    onshowPercentageChange?: (args: PropertyChangeData) => void;
    onstartAngleChange?: (args: PropertyChangeData) => void;
    onstrokeColorsChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    outerRadiusFactor?: string | number;
    showPercentage?: string | boolean;
    startAngle?: string | number;
    strokeColors?: string | Color[];
    strokeWidth?: string | number;
}>
interface PieSeriesAttributes extends TPieSeriesAttributes {}

// index.d.ts
type TPointLabelStyleAttributes = Override<ViewBaseAttributes, {
    fillColor?: string | Color;
    fontName?: string;
    fontStyle?: ChartFontStyle;
    margin?: string;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onfontNameChange?: (args: PropertyChangeData) => void;
    onfontStyleChange?: (args: PropertyChangeData) => void;
    onmarginChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    ontextColorChange?: (args: PropertyChangeData) => void;
    ontextFormatChange?: (args: PropertyChangeData) => void;
    ontextSizeChange?: (args: PropertyChangeData) => void;
    strokeColor?: string | Color;
    strokeWidth?: string | number;
    textColor?: string | Color;
    textFormat?: string;
    textSize?: string | number;
}>
interface PointLabelStyleAttributes extends TPointLabelStyleAttributes {}

// common.d.ts
type TRadCartesianChartAttributes = Override<RadChartBaseAttributes, {
    grid?: string | RadCartesianChartGrid;
    horizontalAxis?: string | CartesianAxis;
    horizontalZoom?: string | number;
    ongridChange?: (args: PropertyChangeData) => void;
    onhorizontalAxisChange?: (args: PropertyChangeData) => void;
    onhorizontalZoomChange?: (args: PropertyChangeData) => void;
    ontrackballChange?: (args: PropertyChangeData) => void;
    onverticalAxisChange?: (args: PropertyChangeData) => void;
    onverticalZoomChange?: (args: PropertyChangeData) => void;
    trackball?: string | Trackball;
    verticalAxis?: string | CartesianAxis;
    verticalZoom?: string | number;
}>
interface RadCartesianChartAttributes extends TRadCartesianChartAttributes {}

// index.d.ts
type TRadCartesianChartGridAttributes = Override<ViewBaseAttributes, {
    android?: any;
    horizontalLinesVisible?: string | boolean;
    horizontalStripLineColor?: string | Color | Color[];
    horizontalStripLinesVisible?: string | boolean;
    horizontalStrokeColor?: string | Color | Color[];
    horizontalStrokeWidth?: string | number;
    ios?: any;
    onhorizontalLinesVisibleChange?: (args: PropertyChangeData) => void;
    onhorizontalStripLineColorChange?: (args: PropertyChangeData) => void;
    onhorizontalStripLinesVisibleChange?: (args: PropertyChangeData) => void;
    onhorizontalStrokeColorChange?: (args: PropertyChangeData) => void;
    onhorizontalStrokeWidthChange?: (args: PropertyChangeData) => void;
    onverticalLinesVisibleChange?: (args: PropertyChangeData) => void;
    onverticalStripLineColorChange?: (args: PropertyChangeData) => void;
    onverticalStripLinesVisibleChange?: (args: PropertyChangeData) => void;
    onverticalStrokeColorChange?: (args: PropertyChangeData) => void;
    onverticalStrokeWidthChange?: (args: PropertyChangeData) => void;
    verticalLinesVisible?: string | boolean;
    verticalStripLineColor?: string | Color | Color[];
    verticalStripLinesVisible?: string | boolean;
    verticalStrokeColor?: string | Color | Color[];
    verticalStrokeWidth?: string | number;
}>
interface RadCartesianChartGridAttributes extends TRadCartesianChartGridAttributes {}

// common.d.ts
type TRadChartBaseAttributes = Override<ViewAttributes, {
    allowAnimations?: string | boolean;
    androidView?: any;
    annotations?: string | ObservableArray<any>;
    initializer?: ChartBaseValueMapper;
    legend?: string | RadLegendView;
    onallowAnimationsChange?: (args: PropertyChangeData) => void;
    onannotationsChange?: (args: PropertyChangeData) => void;
    onlegendChange?: (args: PropertyChangeData) => void;
    onpalettesChange?: (args: PropertyChangeData) => void;
    onpointSelectionModeChange?: (args: PropertyChangeData) => void;
    onseriesChange?: (args: PropertyChangeData) => void;
    onseriesSelectionModeChange?: (args: PropertyChangeData) => void;
    palettes?: string | ObservableArray<Palette>;
    pointSelectionMode?: ChartSelectionMode;
    rootLayout?: any;
    series?: string | ObservableArray<any>;
    seriesSelectionMode?: ChartSelectionMode;
}>
interface RadChartBaseAttributes extends TRadChartBaseAttributes {}

// index.d.ts
type TRadLegendViewAttributes = Override<ViewAttributes, {
    enableSelection?: string | boolean;
    horizontalOffset?: string | number;
    offsetOrigin?: ChartLegendOffsetOrigin;
    onenableSelectionChange?: (args: PropertyChangeData) => void;
    onhorizontalOffsetChange?: (args: PropertyChangeData) => void;
    onoffsetOriginChange?: (args: PropertyChangeData) => void;
    onpositionChange?: (args: PropertyChangeData) => void;
    ontitleChange?: (args: PropertyChangeData) => void;
    ontitleColorChange?: (args: PropertyChangeData) => void;
    ontitleSizeChange?: (args: PropertyChangeData) => void;
    onverticalOffsetChange?: (args: PropertyChangeData) => void;
    position?: ChartLegendPosition;
    title?: string;
    titleColor?: string | Color;
    titleSize?: string | number;
    verticalOffset?: string | number;
}>
interface RadLegendViewAttributes extends TRadLegendViewAttributes {}

// common.d.ts
type TRadPieChartAttributes = Override<RadChartBaseAttributes, {

}>
interface RadPieChartAttributes extends TRadPieChartAttributes {}

// index.d.ts
type TRangeBarSeriesAttributes = Override<CategoricalSeriesAttributes, {
    highPropertyName?: string;
    lowPropertyName?: string;
    onhighPropertyNameChange?: (args: PropertyChangeData) => void;
    onlowPropertyNameChange?: (args: PropertyChangeData) => void;
}>
interface RangeBarSeriesAttributes extends TRangeBarSeriesAttributes {}

// index.d.ts
type TScatterBubbleSeriesAttributes = Override<ScatterSeriesAttributes, {
    bubbleScale?: string | number;
    bubbleSizeProperty?: string;
    bubbleSizePropertyName?: string;
    onbubbleScaleChange?: (args: PropertyChangeData) => void;
    onbubbleSizePropertyChange?: (args: PropertyChangeData) => void;
    onbubbleSizePropertyNameChange?: (args: PropertyChangeData) => void;
}>
interface ScatterBubbleSeriesAttributes extends TScatterBubbleSeriesAttributes {}

// index.d.ts
type TScatterSeriesAttributes = Override<CartesianSeriesAttributes, {
    onxPropertyChange?: (args: PropertyChangeData) => void;
    onyPropertyChange?: (args: PropertyChangeData) => void;
    xProperty?: string;
    yProperty?: string;
}>
interface ScatterSeriesAttributes extends TScatterSeriesAttributes {}

// index.d.ts
type TSplineAreaSeriesAttributes = Override<AreaSeriesAttributes, {

}>
interface SplineAreaSeriesAttributes extends TSplineAreaSeriesAttributes {}

// index.d.ts
type TSplineSeriesAttributes = Override<LineSeriesAttributes, {

}>
interface SplineSeriesAttributes extends TSplineSeriesAttributes {}

// index.d.ts
type TTrackballAttributes = Override<ViewBaseAttributes, {
    onshowIntersectionPointsChange?: (args: PropertyChangeData) => void;
    onsnapModeChange?: (args: PropertyChangeData) => void;
    showIntersectionPoints?: string | boolean;
    snapMode?: ChartTrackballSnapMode;
}>
interface TrackballAttributes extends TTrackballAttributes {}


interface IntrinsicElements {
        areaSeries: AreaSeriesAttributes;
        barSeries: BarSeriesAttributes;
        bubbleSeries: BubbleSeriesAttributes;
        candlestickSeries: CandlestickSeriesAttributes;
        cartesianAxis: CartesianAxisAttributes;
        cartesianChartAnnotation: CartesianChartAnnotationAttributes;
        cartesianSeries: CartesianSeriesAttributes;
        categoricalAxis: CategoricalAxisAttributes;
        categoricalSeries: CategoricalSeriesAttributes;
        chartAxisLabel: ChartAxisLabelAttributes;
        chartGridLineAnnotation: ChartGridLineAnnotationAttributes;
        chartPlotBandAnnotation: ChartPlotBandAnnotationAttributes;
        chartSeries: ChartSeriesAttributes;
        chartSeriesLabel: ChartSeriesLabelAttributes;
        dateTimeCategoricalAxis: DateTimeCategoricalAxisAttributes;
        dateTimeContinuousAxis: DateTimeContinuousAxisAttributes;
        donutSeries: DonutSeriesAttributes;
        lineSeries: LineSeriesAttributes;
        linearAxis: LinearAxisAttributes;
        logarithmicAxis: LogarithmicAxisAttributes;
        ohlcSeries: OhlcSeriesAttributes;
        palette: PaletteAttributes;
        paletteEntry: PaletteEntryAttributes;
        pieSeries: PieSeriesAttributes;
        pointLabelStyle: PointLabelStyleAttributes;
        radCartesianChart: RadCartesianChartAttributes;
        radCartesianChartGrid: RadCartesianChartGridAttributes;
        radLegendView: RadLegendViewAttributes;
        radPieChart: RadPieChartAttributes;
        rangeBarSeries: RangeBarSeriesAttributes;
        scatterBubbleSeries: ScatterBubbleSeriesAttributes;
        scatterSeries: ScatterSeriesAttributes;
        splineAreaSeries: SplineAreaSeriesAttributes;
        splineSeries: SplineSeriesAttributes;
        trackball: TrackballAttributes; 
}


}
}
