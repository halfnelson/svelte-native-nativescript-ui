<page>
    <actionBar title="Svelte Native App" />
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
            <gridLayout>
                <label class="info" horizontalAlignment="center" verticalAlignment="center" textWrap="true">
                    <formattedString>
                        <span class="fas" text="&#xf135;" />
                        <span text="Test" />
                    </formattedString>
                </label>
            </gridLayout>
        </radSideDrawer.mainContent>
    </radSideDrawer>
</page>

<script>
    let drawer;
</script>

