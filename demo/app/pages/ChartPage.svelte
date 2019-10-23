<page>
    <actionBar title="RadChart">
        <actionItem icon="font://&#xf133;" class="fas" on:tap={() => mode = "pie" } visibility="{visibleIf(mode == "cartesian")}" />
        <actionItem icon="font://&#xf783;" class="fas" on:tap={() => mode = "cartesian" } visibility="{visibleIf(mode == "pie")}" />
      />
    </actionBar>
    {#if mode == "pie"}
        <gridLayout rows="*, *">
        <radPieChart id="pieChart" allowAnimation="true" row="0">
            <pieSeries prop:series
                selectionMode="DataPoint"
                expandRadius="0.4"
                outerRadiusFactor="0.7"
                valueProperty="Amount"
                legendLabel="Brand"
                items="{ pieSource }">
            </pieSeries>
            <radLegendView prop:legend position="Right" title="Brands" offsetOrigin="TopRight" width="110" enableSelection="true"/>
        </radPieChart>
        <!--
        <chart:RadPieChart id="donutChart" allowAnimation="true" row="1">
            <chart:RadPieChart.series>
                <chart:DonutSeries
                    selectionMode="DataPoint"
                    expandRadius="0.4"
                    outerRadiusFactor="0.7"
                    innerRadiusFactor="0.4"
                    valueProperty="Amount"
                    legendLabel="Brand"
                    items="{{ pieSource }}">
                </chart:DonutSeries>
            </chart:RadPieChart.series>

            <chart:RadPieChart.legend>
                <chart:RadLegendView position="Right" title="Brands" offsetOrigin="TopRight" width="110" enableSelection="true"/>
            </chart:RadPieChart.legend>
        </chart:RadPieChart>
        -->
    </gridLayout>
    {:else}
        <label text="Cartesian goes here" />
    {/if}
</page>

<script>
const visibleIf = l => l ? "visible" : "collapsed"

let mode = "pie"
let pieSource =   [
                { Brand: "Audi", Amount: 10 },
                { Brand: "Mercedes", Amount: 76 },
                { Brand: "Fiat", Amount: 60 },
                { Brand: "BMW", Amount: 24 },
                { Brand: "Crysler", Amount: 40 }
            ]



</script>

