<page actionBarHidden="true">
    <radSideDrawer bind:this={drawer}>
        <radSideDrawer.drawerContent>
            <gridLayout rows="auto, *" >
                <label row="0" padding="10" class="h2" horizontalAlignment="left">Examples</label>
                <label row="0" class="fas h2" text="&#xf00d;" padding="10" horizontalAlignment="right" on:tap={() => drawer.closeDrawer()} />
                <scrollView row="1" >
                    <stackLayout>
                        <label text="Primary" padding="10" />
                    </stackLayout>
                </scrollView>
            </gridLayout>
        </radSideDrawer.drawerContent>
        <radSideDrawer.mainContent>
            <frame id="navFrame">
                <ListViewPage />
           </frame>
        </radSideDrawer.mainContent>
    </radSideDrawer>
</page>

<script>
    import { onMount } from 'svelte'
    import * as nav from './Nav'

    import ListViewPage from './pages/ListViewPage.svelte'
  
    let drawer;
    nav.init("navFrame")

</script>

