export {} //Ensure this is a module
type CalendarCellAlignment = import("nativescript-ui-calendar").CalendarCellAlignment;
type CalendarDayViewStyle = import("nativescript-ui-calendar").CalendarDayViewStyle;
type CalendarEvent = import("nativescript-ui-calendar").CalendarEvent;
type CalendarEventsViewMode = import("nativescript-ui-calendar").CalendarEventsViewMode;
type CalendarFontStyle = import("nativescript-ui-calendar").CalendarFontStyle;
type CalendarMonthNamesViewStyle = import("nativescript-ui-calendar").CalendarMonthNamesViewStyle;
type CalendarMonthViewStyle = import("nativescript-ui-calendar").CalendarMonthViewStyle;
type CalendarSelectionMode = import("nativescript-ui-calendar").CalendarSelectionMode;
type CalendarSelectionShape = import("nativescript-ui-calendar").CalendarSelectionShape;
type CalendarTransitionMode = import("nativescript-ui-calendar").CalendarTransitionMode;
type CalendarViewMode = import("nativescript-ui-calendar").CalendarViewMode;
type CalendarWeekViewStyle = import("nativescript-ui-calendar").CalendarWeekViewStyle;
type CalendarYearViewStyle = import("nativescript-ui-calendar").CalendarYearViewStyle;
type CellStyle = import("nativescript-ui-calendar").CellStyle;
type Color = import("@nativescript/core/color").Color;
type CommonCalendarFontStyle = import("nativescript-ui-calendar/common").CalendarFontStyle;
type CommonCellStyle = import("nativescript-ui-calendar/common").CellStyle;
type DateRange = import("nativescript-ui-calendar").DateRange;
type DayCellStyle = import("nativescript-ui-calendar").DayCellStyle;
type DayEventsViewStyle = import("nativescript-ui-calendar").DayEventsViewStyle;
type InlineEventCellStyle = import("nativescript-ui-calendar").InlineEventCellStyle;
type MonthCellStyle = import("nativescript-ui-calendar").MonthCellStyle;
type ObservableArray<T1> = import("@nativescript/core/data/observable-array").ObservableArray<T1>;
type PropertyChangeData = import("@nativescript/core/data/observable").PropertyChangeData;
type RadCalendar = import("nativescript-ui-calendar/common").RadCalendar;
type Override<What, With> = Omit<What, keyof With> & With


declare global {
namespace svelteNative.JSX {

// common.d.ts
type TAllDayEventsViewStyleAttributes = Override<ViewBaseAttributes, {
    allDayText?: string;
    allDayTextIsVisible?: string | boolean;
    android?: any;
    backgroundColor?: string | Color;
    ios?: any;
    onallDayTextChange?: (args: PropertyChangeData) => void;
    onallDayTextIsVisibleChange?: (args: PropertyChangeData) => void;
    onbackgroundColorChange?: (args: PropertyChangeData) => void;
    owner?: any;
}>
interface AllDayEventsViewStyleAttributes extends TAllDayEventsViewStyleAttributes {}

// common.d.ts
type TCalendarDayViewStyleAttributes = Override<CalendarWeekViewStyleAttributes, {
    allDayEventsViewStyle?: string | DayEventsViewStyle;
    dayEventsViewStyle?: string | DayEventsViewStyle;
    onallDayEventsViewStyleChange?: (args: PropertyChangeData) => void;
    ondayEventsViewStyleChange?: (args: PropertyChangeData) => void;
    onshowWeekChange?: (args: PropertyChangeData) => void;
    showWeek?: string | boolean;
}>
interface CalendarDayViewStyleAttributes extends TCalendarDayViewStyleAttributes {}

// common.d.ts
type TCalendarMonthNamesViewStyleAttributes = Override<ViewBaseAttributes, {
    monthNameCellStyle?: string | CellStyle;
    onmonthNameCellStyleChange?: (args: PropertyChangeData) => void;
    ontitleCellStyleChange?: (args: PropertyChangeData) => void;
    owner?: RadCalendar;
    titleCellStyle?: string | CommonCellStyle;
}>
interface CalendarMonthNamesViewStyleAttributes extends TCalendarMonthNamesViewStyleAttributes {}

// common.d.ts
type TCalendarMonthViewStyleAttributes = Override<ViewBaseAttributes, {
    anotherMonthCellStyle?: string | DayCellStyle;
    backgroundColor?: string | Color;
    dayCellStyle?: string | DayCellStyle;
    dayNameCellStyle?: string | CellStyle;
    disabledCellStyle?: string | DayCellStyle;
    inlineEventCellStyle?: string | InlineEventCellStyle;
    onanotherMonthCellStyleChange?: (args: PropertyChangeData) => void;
    onbackgroundColorChange?: (args: PropertyChangeData) => void;
    ondayCellStyleChange?: (args: PropertyChangeData) => void;
    ondayNameCellStyleChange?: (args: PropertyChangeData) => void;
    ondisabledCellStyleChange?: (args: PropertyChangeData) => void;
    oninlineEventCellStyleChange?: (args: PropertyChangeData) => void;
    onselectedDayCellStyleChange?: (args: PropertyChangeData) => void;
    onselectionShapeChange?: (args: PropertyChangeData) => void;
    onselectionShapeColorChange?: (args: PropertyChangeData) => void;
    onselectionShapeSizeChange?: (args: PropertyChangeData) => void;
    onshowDayNamesChange?: (args: PropertyChangeData) => void;
    onshowTitleChange?: (args: PropertyChangeData) => void;
    onshowWeekNumbersChange?: (args: PropertyChangeData) => void;
    ontitleCellStyleChange?: (args: PropertyChangeData) => void;
    ontodayCellStyleChange?: (args: PropertyChangeData) => void;
    onweekNumberCellStyleChange?: (args: PropertyChangeData) => void;
    onweekendCellStyleChange?: (args: PropertyChangeData) => void;
    owner?: RadCalendar;
    selectedDayCellStyle?: string | DayCellStyle;
    selectionShape?: CalendarSelectionShape;
    selectionShapeColor?: string | Color;
    selectionShapeSize?: string | number;
    showDayNames?: string | boolean;
    showTitle?: string | boolean;
    showWeekNumbers?: string | boolean;
    titleCellStyle?: string | CellStyle;
    todayCellStyle?: string | DayCellStyle;
    weekNumberCellStyle?: string | CellStyle;
    weekendCellStyle?: string | CellStyle;
}>
interface CalendarMonthViewStyleAttributes extends TCalendarMonthViewStyleAttributes {}

// common.d.ts
type TCalendarWeekViewStyleAttributes = Override<CalendarMonthViewStyleAttributes, {

}>
interface CalendarWeekViewStyleAttributes extends TCalendarWeekViewStyleAttributes {}

// common.d.ts
type TCalendarYearViewStyleAttributes = Override<ViewBaseAttributes, {
    monthCellStyle?: string | MonthCellStyle;
    onmonthCellStyleChange?: (args: PropertyChangeData) => void;
    ontitleCellStyleChange?: (args: PropertyChangeData) => void;
    owner?: RadCalendar;
    titleCellStyle?: string | CellStyle;
}>
interface CalendarYearViewStyleAttributes extends TCalendarYearViewStyleAttributes {}

// common.d.ts
type TCellStyleAttributes = Override<ViewBaseAttributes, {
    android?: any;
    cellAlignment?: CalendarCellAlignment;
    cellBackgroundColor?: string | Color;
    cellBorderColor?: string | Color;
    cellBorderWidth?: string | number;
    cellPaddingHorizontal?: string | number;
    cellPaddingVertical?: string | number;
    cellTextColor?: string | Color;
    cellTextFontName?: string;
    cellTextFontStyle?: CalendarFontStyle;
    cellTextSize?: string | number;
    ios?: any;
    oncellAlignmentChange?: (args: PropertyChangeData) => void;
    oncellBackgroundColorChange?: (args: PropertyChangeData) => void;
    oncellBorderColorChange?: (args: PropertyChangeData) => void;
    oncellBorderWidthChange?: (args: PropertyChangeData) => void;
    oncellPaddingHorizontalChange?: (args: PropertyChangeData) => void;
    oncellPaddingVerticalChange?: (args: PropertyChangeData) => void;
    oncellTextColorChange?: (args: PropertyChangeData) => void;
    oncellTextFontNameChange?: (args: PropertyChangeData) => void;
    oncellTextFontStyleChange?: (args: PropertyChangeData) => void;
    oncellTextSizeChange?: (args: PropertyChangeData) => void;
    owner?: any;
}>
interface CellStyleAttributes extends TCellStyleAttributes {}

// common.d.ts
type TDayCellStyleAttributes = Override<CellStyleAttributes, {
    eventFontName?: string;
    eventFontStyle?: CalendarFontStyle;
    eventTextColor?: string | Color;
    eventTextSize?: string | number;
    oneventFontNameChange?: (args: PropertyChangeData) => void;
    oneventFontStyleChange?: (args: PropertyChangeData) => void;
    oneventTextColorChange?: (args: PropertyChangeData) => void;
    oneventTextSizeChange?: (args: PropertyChangeData) => void;
    onshowEventsTextChange?: (args: PropertyChangeData) => void;
    showEventsText?: string | boolean;
}>
interface DayCellStyleAttributes extends TDayCellStyleAttributes {}

// common.d.ts
type TDayEventsViewStyleAttributes = Override<ViewBaseAttributes, {
    android?: any;
    backgroundColor?: string | Color;
    ios?: any;
    onbackgroundColorChange?: (args: PropertyChangeData) => void;
    ontimeLabelFontNameChange?: (args: PropertyChangeData) => void;
    ontimeLabelFontStyleChange?: (args: PropertyChangeData) => void;
    ontimeLabelFormatChange?: (args: PropertyChangeData) => void;
    ontimeLabelTextColorChange?: (args: PropertyChangeData) => void;
    ontimeLabelTextSizeChange?: (args: PropertyChangeData) => void;
    ontimeLinesColorChange?: (args: PropertyChangeData) => void;
    ontimeLinesWidthChange?: (args: PropertyChangeData) => void;
    owner?: any;
    timeLabelFontName?: string;
    timeLabelFontStyle?: CommonCalendarFontStyle;
    timeLabelFormat?: string;
    timeLabelTextColor?: string | Color;
    timeLabelTextSize?: string | number;
    timeLinesColor?: string | Color;
    timeLinesWidth?: string | number;
}>
interface DayEventsViewStyleAttributes extends TDayEventsViewStyleAttributes {}

// common.d.ts
type TInlineEventCellStyleAttributes = Override<ViewBaseAttributes, {
    cellBackgroundColor?: string | Color;
    eventFontName?: string;
    eventFontStyle?: CalendarFontStyle;
    eventTextColor?: string | Color;
    eventTextSize?: string | number;
    oncellBackgroundColorChange?: (args: PropertyChangeData) => void;
    oneventFontNameChange?: (args: PropertyChangeData) => void;
    oneventFontStyleChange?: (args: PropertyChangeData) => void;
    oneventTextColorChange?: (args: PropertyChangeData) => void;
    oneventTextSizeChange?: (args: PropertyChangeData) => void;
    ontimeFontNameChange?: (args: PropertyChangeData) => void;
    ontimeFontStyleChange?: (args: PropertyChangeData) => void;
    ontimeTextColorChange?: (args: PropertyChangeData) => void;
    ontimeTextSizeChange?: (args: PropertyChangeData) => void;
    timeFontName?: string;
    timeFontStyle?: CalendarFontStyle;
    timeTextColor?: string | Color;
    timeTextSize?: string | number;
}>
interface InlineEventCellStyleAttributes extends TInlineEventCellStyleAttributes {}

// common.d.ts
type TMonthCellStyleAttributes = Override<ViewBaseAttributes, {
    dayFontName?: string;
    dayFontStyle?: CalendarFontStyle;
    dayNameFontName?: string;
    dayNameFontStyle?: CalendarFontStyle;
    dayNameTextColor?: string | Color;
    dayNameTextSize?: string | number;
    dayTextColor?: string | Color;
    dayTextSize?: string | number;
    monthNameFontName?: string;
    monthNameFontStyle?: CalendarFontStyle;
    monthNameTextColor?: string | Color;
    monthNameTextSize?: string | number;
    ondayFontNameChange?: (args: PropertyChangeData) => void;
    ondayFontStyleChange?: (args: PropertyChangeData) => void;
    ondayNameFontNameChange?: (args: PropertyChangeData) => void;
    ondayNameFontStyleChange?: (args: PropertyChangeData) => void;
    ondayNameTextColorChange?: (args: PropertyChangeData) => void;
    ondayNameTextSizeChange?: (args: PropertyChangeData) => void;
    ondayTextColorChange?: (args: PropertyChangeData) => void;
    ondayTextSizeChange?: (args: PropertyChangeData) => void;
    onmonthNameFontNameChange?: (args: PropertyChangeData) => void;
    onmonthNameFontStyleChange?: (args: PropertyChangeData) => void;
    onmonthNameTextColorChange?: (args: PropertyChangeData) => void;
    onmonthNameTextSizeChange?: (args: PropertyChangeData) => void;
    ontodayTextColorChange?: (args: PropertyChangeData) => void;
    onweekendTextColorChange?: (args: PropertyChangeData) => void;
    owner?: any;
    todayTextColor?: string | Color;
    weekendTextColor?: string | Color;
}>
interface MonthCellStyleAttributes extends TMonthCellStyleAttributes {}

// common.d.ts
type TRadCalendarAttributes = Override<ViewAttributes, {
    dayViewStyle?: string | CalendarDayViewStyle;
    displayedDate?: string | Date;
    eventSource?: string | ObservableArray<CalendarEvent>;
    eventsViewMode?: CalendarEventsViewMode;
    horizontalTransition?: string | boolean;
    locale?: string;
    maxDate?: string | Date;
    minDate?: string | Date;
    monthNamesViewStyle?: string | CalendarMonthNamesViewStyle;
    monthViewStyle?: string | CalendarMonthViewStyle;
    ondayViewStyleChange?: (args: PropertyChangeData) => void;
    ondisplayedDateChange?: (args: PropertyChangeData) => void;
    oneventSourceChange?: (args: PropertyChangeData) => void;
    oneventsViewModeChange?: (args: PropertyChangeData) => void;
    onhorizontalTransitionChange?: (args: PropertyChangeData) => void;
    onlocaleChange?: (args: PropertyChangeData) => void;
    onmaxDateChange?: (args: PropertyChangeData) => void;
    onminDateChange?: (args: PropertyChangeData) => void;
    onmonthNamesViewStyleChange?: (args: PropertyChangeData) => void;
    onmonthViewStyleChange?: (args: PropertyChangeData) => void;
    onselectedDateChange?: (args: PropertyChangeData) => void;
    onselectedDateRangeChange?: (args: PropertyChangeData) => void;
    onselectedDatesChange?: (args: PropertyChangeData) => void;
    onselectionModeChange?: (args: PropertyChangeData) => void;
    ontransitionModeChange?: (args: PropertyChangeData) => void;
    onviewModeChange?: (args: PropertyChangeData) => void;
    onweekViewStyleChange?: (args: PropertyChangeData) => void;
    onyearViewStyleChange?: (args: PropertyChangeData) => void;
    selectedDate?: string | Date;
    selectedDateRange?: string | DateRange;
    selectedDates?: string | any;
    selectionMode?: CalendarSelectionMode;
    transitionMode?: CalendarTransitionMode;
    viewMode?: CalendarViewMode;
    weekViewStyle?: string | CalendarWeekViewStyle;
    yearViewStyle?: string | CalendarYearViewStyle;
}>
interface RadCalendarAttributes extends TRadCalendarAttributes {}


interface IntrinsicElements {
        allDayEventsViewStyle: AllDayEventsViewStyleAttributes;
        calendarDayViewStyle: CalendarDayViewStyleAttributes;
        calendarMonthNamesViewStyle: CalendarMonthNamesViewStyleAttributes;
        calendarMonthViewStyle: CalendarMonthViewStyleAttributes;
        calendarWeekViewStyle: CalendarWeekViewStyleAttributes;
        calendarYearViewStyle: CalendarYearViewStyleAttributes;
        cellStyle: CellStyleAttributes;
        dayCellStyle: DayCellStyleAttributes;
        dayEventsViewStyle: DayEventsViewStyleAttributes;
        inlineEventCellStyle: InlineEventCellStyleAttributes;
        monthCellStyle: MonthCellStyleAttributes;
        radCalendar: RadCalendarAttributes; 
}


}
}
