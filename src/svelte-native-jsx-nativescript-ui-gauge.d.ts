export {} //Ensure this is a module
type BarIndicatorStyle = import("nativescript-ui-gauge").BarIndicatorStyle;
type Color = import("@nativescript/core/color").Color;
type CommonGaugeScale = import("nativescript-ui-gauge/common").GaugeScale;
type GaugeIndicator = import("nativescript-ui-gauge").GaugeIndicator;
type GaugeIndicatorCapMode = import("nativescript-ui-gauge").GaugeIndicatorCapMode;
type GaugeIndicatorValueMapper = import("nativescript-ui-gauge/initializers/gauges-initializers.common").GaugeIndicatorValueMapper;
type GaugeScale = import("nativescript-ui-gauge").GaugeScale;
type GaugeScaleLayoutMode = import("nativescript-ui-gauge").GaugeScaleLayoutMode;
type GaugeScaleValueMapper = import("nativescript-ui-gauge/initializers/gauges-initializers.common").GaugeScaleValueMapper;
type NeedleStyle = import("nativescript-ui-gauge").NeedleStyle;
type ObservableArray<T1> = import("@nativescript/core/data/observable-array").ObservableArray<T1>;
type PropertyChangeData = import("@nativescript/core/data/observable").PropertyChangeData;
type RadGauge = import("nativescript-ui-gauge/common").RadGauge;
type RadGaugeValueMapper = import("nativescript-ui-gauge/initializers/gauges-initializers.common").RadGaugeValueMapper;
type ScaleStyle = import("nativescript-ui-gauge").ScaleStyle;
type SubtitleStyle = import("nativescript-ui-gauge").SubtitleStyle;
type TitleStyle = import("nativescript-ui-gauge").TitleStyle;
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// common.d.ts
type TBarIndicatorAttributes = Override<GaugeIndicatorAttributes, {
    animationStartValue?: string | number;
    indicatorStyle?: string | BarIndicatorStyle;
    initializer?: GaugeIndicatorValueMapper;
    location?: string | number;
    maximum?: string | number;
    minimum?: string | number;
    onanimationStartValueChange?: (args: PropertyChangeData) => void;
    onindicatorStyleChange?: (args: PropertyChangeData) => void;
    onlocationChange?: (args: PropertyChangeData) => void;
    onmaximumChange?: (args: PropertyChangeData) => void;
    onminimumChange?: (args: PropertyChangeData) => void;
}>
interface BarIndicatorAttributes extends TBarIndicatorAttributes {}

// common.d.ts
type TBarIndicatorStyleAttributes = Override<IndicatorStyleAttributes, {
    barWidth?: string | number;
    cap?: GaugeIndicatorCapMode;
    onbarWidthChange?: (args: PropertyChangeData) => void;
    oncapChange?: (args: PropertyChangeData) => void;
}>
interface BarIndicatorStyleAttributes extends TBarIndicatorStyleAttributes {}

// common.d.ts
type TGaugeIndicatorAttributes = Override<ViewBaseAttributes, {
    android?: any;
    animationDuration?: string | number;
    initializer?: GaugeIndicatorValueMapper;
    ios?: any;
    isAnimated?: string | boolean;
    nativeObject?: any;
    onanimationDurationChange?: (args: PropertyChangeData) => void;
    onisAnimatedChange?: (args: PropertyChangeData) => void;
    owner?: CommonGaugeScale;
}>
interface GaugeIndicatorAttributes extends TGaugeIndicatorAttributes {}

// common.d.ts
type TGaugeScaleAttributes = Override<ViewBaseAttributes, {
    android?: any;
    indicators?: string | ObservableArray<GaugeIndicator>;
    initializer?: GaugeScaleValueMapper;
    ios?: any;
    maximum?: string | number;
    minimum?: string | number;
    nativeObject?: any;
    onindicatorsChange?: (args: PropertyChangeData) => void;
    onmaximumChange?: (args: PropertyChangeData) => void;
    onminimumChange?: (args: PropertyChangeData) => void;
    onscaleStyleChange?: (args: PropertyChangeData) => void;
    owner?: RadGauge;
    scaleStyle?: string | ScaleStyle;
}>
interface GaugeScaleAttributes extends TGaugeScaleAttributes {}

// common.d.ts
type TGaugeStyleBaseAttributes = Override<ViewBaseAttributes, {
    fillColor?: string | Color;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onstrokeColorChange?: (args: PropertyChangeData) => void;
    onstrokeWidthChange?: (args: PropertyChangeData) => void;
    owner?: any;
    strokeColor?: string | Color;
    strokeWidth?: string;
}>
interface GaugeStyleBaseAttributes extends TGaugeStyleBaseAttributes {}

// common.d.ts
type TIndicatorStyleAttributes = Override<GaugeStyleBaseAttributes, {

}>
interface IndicatorStyleAttributes extends TIndicatorStyleAttributes {}

// common.d.ts
type TNeedleStyleAttributes = Override<IndicatorStyleAttributes, {
    bottomWidth?: string | number;
    circleFillColor?: string | Color;
    circleInnerRadius?: string | number;
    circleRadius?: string | number;
    circleStrokeColor?: string | Color;
    circleStrokeWidth?: string | number;
    length?: string | number;
    offset?: string | number;
    onbottomWidthChange?: (args: PropertyChangeData) => void;
    oncircleFillColorChange?: (args: PropertyChangeData) => void;
    oncircleInnerRadiusChange?: (args: PropertyChangeData) => void;
    oncircleRadiusChange?: (args: PropertyChangeData) => void;
    oncircleStrokeColorChange?: (args: PropertyChangeData) => void;
    oncircleStrokeWidthChange?: (args: PropertyChangeData) => void;
    onlengthChange?: (args: PropertyChangeData) => void;
    onoffsetChange?: (args: PropertyChangeData) => void;
    ontopWidthChange?: (args: PropertyChangeData) => void;
    topWidth?: string | number;
}>
interface NeedleStyleAttributes extends TNeedleStyleAttributes {}

// common.d.ts
type TRadGaugeAttributes = Override<ViewAttributes, {
    fillColor?: string | Color;
    initializer?: RadGaugeValueMapper;
    nativeObject?: any;
    onfillColorChange?: (args: PropertyChangeData) => void;
    onscalesChange?: (args: PropertyChangeData) => void;
    onsubtitleChange?: (args: PropertyChangeData) => void;
    onsubtitleStyleChange?: (args: PropertyChangeData) => void;
    ontitleChange?: (args: PropertyChangeData) => void;
    ontitleStyleChange?: (args: PropertyChangeData) => void;
    scales?: string | ObservableArray<GaugeScale>;
    subtitle?: string;
    subtitleStyle?: string | SubtitleStyle;
    title?: string;
    titleStyle?: string | TitleStyle;
}>
interface RadGaugeAttributes extends TRadGaugeAttributes {}

// common.d.ts
type TRadRadialGaugeAttributes = Override<RadGaugeAttributes, {

}>
interface RadRadialGaugeAttributes extends TRadRadialGaugeAttributes {}

// common.d.ts
type TRadialBarIndicatorAttributes = Override<BarIndicatorAttributes, {

}>
interface RadialBarIndicatorAttributes extends TRadialBarIndicatorAttributes {}

// common.d.ts
type TRadialNeedleAttributes = Override<GaugeIndicatorAttributes, {
    initializer?: GaugeIndicatorValueMapper;
    needleStyle?: string | NeedleStyle;
    onneedleStyleChange?: (args: PropertyChangeData) => void;
    onvalueChange?: (args: PropertyChangeData) => void;
    value?: string | number;
}>
interface RadialNeedleAttributes extends TRadialNeedleAttributes {}

// common.d.ts
type TRadialScaleAttributes = Override<GaugeScaleAttributes, {
    onradiusChange?: (args: PropertyChangeData) => void;
    onstartAngleChange?: (args: PropertyChangeData) => void;
    onsweepAngleChange?: (args: PropertyChangeData) => void;
    radius?: string | number;
    startAngle?: string | number;
    sweepAngle?: string | number;
}>
interface RadialScaleAttributes extends TRadialScaleAttributes {}

// common.d.ts
type TScaleStyleAttributes = Override<GaugeStyleBaseAttributes, {
    labelsColor?: string | Color;
    labelsCount?: string | number;
    labelsLayoutMode?: GaugeScaleLayoutMode;
    labelsOffset?: string | number;
    labelsSize?: string | number;
    labelsVisible?: string | boolean;
    lineColor?: string | Color;
    lineThickness?: string | number;
    majorTicksCount?: string | number;
    majorTicksFillColor?: string | Color;
    majorTicksLength?: string | number;
    majorTicksStrokeColor?: string | Color;
    majorTicksStrokeWidth?: string | number;
    majorTicksWidth?: string | number;
    minorTicksCount?: string | number;
    minorTicksFillColor?: string | Color;
    minorTicksLength?: string | number;
    minorTicksStrokeColor?: string | Color;
    minorTicksStrokeWidth?: string | number;
    minorTicksWidth?: string | number;
    onlabelsColorChange?: (args: PropertyChangeData) => void;
    onlabelsCountChange?: (args: PropertyChangeData) => void;
    onlabelsLayoutModeChange?: (args: PropertyChangeData) => void;
    onlabelsOffsetChange?: (args: PropertyChangeData) => void;
    onlabelsSizeChange?: (args: PropertyChangeData) => void;
    onlabelsVisibleChange?: (args: PropertyChangeData) => void;
    onlineColorChange?: (args: PropertyChangeData) => void;
    onlineThicknessChange?: (args: PropertyChangeData) => void;
    onmajorTicksCountChange?: (args: PropertyChangeData) => void;
    onmajorTicksFillColorChange?: (args: PropertyChangeData) => void;
    onmajorTicksLengthChange?: (args: PropertyChangeData) => void;
    onmajorTicksStrokeColorChange?: (args: PropertyChangeData) => void;
    onmajorTicksStrokeWidthChange?: (args: PropertyChangeData) => void;
    onmajorTicksWidthChange?: (args: PropertyChangeData) => void;
    onminorTicksCountChange?: (args: PropertyChangeData) => void;
    onminorTicksFillColorChange?: (args: PropertyChangeData) => void;
    onminorTicksLengthChange?: (args: PropertyChangeData) => void;
    onminorTicksStrokeColorChange?: (args: PropertyChangeData) => void;
    onminorTicksStrokeWidthChange?: (args: PropertyChangeData) => void;
    onminorTicksWidthChange?: (args: PropertyChangeData) => void;
    onticksLayoutModeChange?: (args: PropertyChangeData) => void;
    onticksOffsetChange?: (args: PropertyChangeData) => void;
    onticksVisibleChange?: (args: PropertyChangeData) => void;
    ticksLayoutMode?: GaugeScaleLayoutMode;
    ticksOffset?: string | number;
    ticksVisible?: string | boolean;
}>
interface ScaleStyleAttributes extends TScaleStyleAttributes {}

// common.d.ts
type TSubtitleStyleAttributes = Override<TitleStyleAttributes, {

}>
interface SubtitleStyleAttributes extends TSubtitleStyleAttributes {}

// common.d.ts
type TTitleStyleAttributes = Override<GaugeStyleBaseAttributes, {
    horizontalOffset?: string | number;
    onhorizontalOffsetChange?: (args: PropertyChangeData) => void;
    ontextColorChange?: (args: PropertyChangeData) => void;
    ontextSizeChange?: (args: PropertyChangeData) => void;
    onverticalOffsetChange?: (args: PropertyChangeData) => void;
    textColor?: string | Color;
    textSize?: string | number;
    verticalOffset?: string | number;
}>
interface TitleStyleAttributes extends TTitleStyleAttributes {}


interface IntrinsicElements {
        barIndicator: BarIndicatorAttributes;
        barIndicatorStyle: BarIndicatorStyleAttributes;
        gaugeIndicator: GaugeIndicatorAttributes;
        gaugeScale: GaugeScaleAttributes;
        indicatorStyle: IndicatorStyleAttributes;
        needleStyle: NeedleStyleAttributes;
        radGauge: RadGaugeAttributes;
        radRadialGauge: RadRadialGaugeAttributes;
        radialBarIndicator: RadialBarIndicatorAttributes;
        radialNeedle: RadialNeedleAttributes;
        radialScale: RadialScaleAttributes;
        scaleStyle: ScaleStyleAttributes;
        subtitleStyle: SubtitleStyleAttributes;
        titleStyle: TitleStyleAttributes; 
}


}
}
