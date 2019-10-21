<page>
    <actionBar title="RadCalendar">
        <actionItem icon="font://&#xf133;" class="fas" on:tap={() => current_view_mode = CalendarViewMode.Year } visibility="{visibleIf(current_view_mode == CalendarViewMode.Month)}" />
        <actionItem icon="font://&#xf783;" class="fas" on:tap={() => current_view_mode = CalendarViewMode.Day } visibility="{visibleIf(current_view_mode == CalendarViewMode.Year)}" />
        <actionItem icon="font://&#xf784;" class="fas" on:tap={() => current_view_mode = CalendarViewMode.Week } visibility="{visibleIf(current_view_mode == CalendarViewMode.Day)}" />
        <actionItem icon="font://&#xf073;" class="fas" on:tap={() => current_view_mode = CalendarViewMode.Month } visibility="{visibleIf(current_view_mode == CalendarViewMode.Week)}" />
    </actionBar>

    <radCalendar eventSource={events} eventsViewMode="Popover" viewMode={current_view_mode}  ></radCalendar>
</page>

<script>
    import { CalendarEvent, CalendarViewMode } from "nativescript-ui-calendar"
    let current_view_mode = CalendarViewMode.Month;
    const visibleIf = l => l ? "visible" : "collapsed"
    


//thanks to https://www.nativescript.org/blog/a-deep-dive-into-telerik-ui-for-nativescripts-calendar
    var eventTitles = ["Lunch with Steve", "Meeting with Jane", "Q1 Recap Meeting"];
    var events = [];

    var j = 1;
    for (var i = 0; i < eventTitles.length; i++) {
        var now = new Date();
        var startDate = new Date(now.getFullYear(), now.getMonth(), j * 2, 12);
        var endDate = new Date(now.getFullYear(), now.getMonth(), (j * 2), 13);
        var event = new CalendarEvent(eventTitles[i], startDate, endDate);
        events.push(event);
        j++;
    }
  

</script>