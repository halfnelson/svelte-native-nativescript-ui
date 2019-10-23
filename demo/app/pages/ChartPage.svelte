<page>
    <actionBar title="RadChart">
        <actionItem icon="font://&#xf133;" class="fas" on:tap={() => mode = "pie" } visibility="{visibleIf(mode == "cartesian")}" />
        <actionItem icon="font://&#xf783;" class="fas" on:tap={() => mode = "cartesian" } visibility="{visibleIf(mode == "pie")}" />
      />
    </actionBar>
    {#if mode == "pie"}
        
    {:else}
        <label text="Cartesian goes here" />
    {/if}
</page>

<script>
const visibleIf = l => l ? "visible" : "collapsed"


</script>

