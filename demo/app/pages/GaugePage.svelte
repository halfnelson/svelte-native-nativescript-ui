<page>
    <Header title="RadGauge"/>
     <radRadialGauge> 
            <radialScale minimum="0" maximum="6" radius="0.90">
                   <scaleStyle majorTicksCount="7" minorTicksCount="9" lineThickness="0" labelsCount="7" ticksOffset="0"/>
                    <radialBarIndicator minimum="0" maximum="1.2" location="0.97">
                            <barIndicatorStyle fillColor="#dddddd" />
                    </radialBarIndicator>
                    <radialBarIndicator minimum="1.2" maximum="2.4" location="0.97">
                            <barIndicatorStyle fillColor="#9DCA56" />
                    </radialBarIndicator>
                    <radialBarIndicator minimum="2.4" maximum="3.6" location="0.97">
                            <barIndicatorStyle fillColor="#F0C44D" />
                    </radialBarIndicator>
                    <radialBarIndicator minimum="3.6" maximum="4.8" location="0.97">
                            <barIndicatorStyle fillColor="#E27633" />
                    </radialBarIndicator>
                    <radialBarIndicator minimum="4.8" maximum="6" location="0.97">
                            <barIndicatorStyle fillColor="#A7010E" />
                    </radialBarIndicator>
                    <radialNeedle value="2" />
            </radialScale>
    </radRadialGauge>
</page>

<script>
    import Header from '../Header.svelte'
</script>