<page>
    <actionBar title="RadChart">
        <actionItem icon="font://&#xf200;" class="fas" on:tap={() => mode = "pie" } visibility="{visibleIf(mode == "cartesian")}" />
        <actionItem icon="font://&#xf080;" class="far" on:tap={() => mode = "cartesian" } visibility="{visibleIf(mode == "pie")}" />
      />
    </actionBar>
    {#if mode == "pie"}
    <gridLayout rows="*, *">
        <radPieChart id="pieChart" allowAnimation="true" row="0">
            <pieSeries
                selectionMode="DataPoint"
                expandRadius="0.4"
                outerRadiusFactor="0.7"
                valueProperty="Amount"
                legendLabel="Brand"
                items="{ pieSource }">
            </pieSeries>
            <radLegendView position="Right" title="Brands" offsetOrigin="TopRight" width="110" enableSelection="true"/>
        </radPieChart>
        <radPieChart id="pieChart" allowAnimation="true" row="1">
            <donutSeries 
                selectionMode="DataPoint"
                expandRadius="0.4"
                outerRadiusFactor="0.7"
                innerRadiusFactor="0.4"
                valueProperty="Amount"
                legendLabel="Brand"
                items="{ pieSource }">
            </donutSeries>
            <radLegendView position="Right" title="Brands" offsetOrigin="TopRight" width="110" enableSelection="true"/>
        </radPieChart>
    </gridLayout>
    {:else}
        <radCartesianChart margin="20">
            <categoricalAxis prop:horizontalAxis />
            <linearAxis prop:verticalAxis />
            <barSeries paletteMode="Item" items="{ categoricalSource }" categoryProperty="Country" valueProperty="Amount" seriesName="countries" />
            <palette seriesName="countries">
                <paletteEntry prop:entries fillColor="#ee4035" strokeColor="#ee4035"/>
                <paletteEntry prop:entries fillColor="#f37736" strokeColor="#f37736"/>
                <paletteEntry prop:entries fillColor="#fdf498" strokeColor="#fdf498"/>
                <paletteEntry prop:entries fillColor="#7bc043" strokeColor="#7bc043"/>
                <paletteEntry prop:entries fillColor="#0392cf" strokeColor="#0392cf"/>
            </palette>
        </radCartesianChart>
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

let categoricalSource = [
    { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24 },
    { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25 },
    { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23 },
    { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24 },
    { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21 }
]

</script>

