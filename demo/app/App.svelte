<page actionBarHidden="true">
    <radSideDrawer bind:this={drawer}>
        <radSideDrawer.drawerContent>
            <gridLayout rows="auto, *" >
                <label row="0" padding="10" class="h2" horizontalAlignment="left">Examples</label>
                <label row="0" class="fas h2" text="&#xf00d;" padding="10" horizontalAlignment="right" on:tap={() => drawer.closeDrawer()} />
                <scrollView row="1" >
                    <stackLayout>
                        <label text="List View" padding="10" on:tap="{() => {drawer.closeDrawer(); nav.goto(ListViewPage);  }}" />
                        <label text="Calendar" padding="10" on:tap="{() => {drawer.closeDrawer(); nav.goto(CalendarPage);  }}" />
                        <label text="Chart" padding="10" on:tap="{() => {drawer.closeDrawer(); nav.goto(ChartPage);  }}" />
                        <label text="Data Form" padding="10" on:tap="{() => {drawer.closeDrawer(); nav.goto(DataFormPage);  }}" />
                        <label text="GaugePage" padding="10" on:tap="{() => {drawer.closeDrawer(); nav.goto(GaugePage);  }}" />
                        <label text="AutoCompletePage" padding="10" on:tap="{() => {drawer.closeDrawer(); nav.goto(AutoCompletePage);  }}" />
                    </stackLayout>
                </scrollView>
            </gridLayout>
        </radSideDrawer.drawerContent>
        <radSideDrawer.mainContent>
           <frame id="navframe" defaultPage={ListViewPage}></frame>
        </radSideDrawer.mainContent>
    </radSideDrawer>
</page>

<script>
    import { onMount, tick } from 'svelte'
    import * as nav from './Nav'
    import ListViewPage from './pages/ListViewPage.svelte'
    import CalendarPage from './pages/CalendarPage.svelte'
    import ChartPage from './pages/ChartPage.svelte'
    import DataFormPage from './pages/DataFormPage.svelte'
    import GaugePage from './pages/GaugePage.svelte'
    import AutoCompletePage from './pages/AutoCompletePage.svelte'

    let drawer;
    nav.init("navframe")
  
</script>

