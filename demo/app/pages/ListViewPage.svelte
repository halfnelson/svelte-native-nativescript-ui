<page>
    <actionBar title="RadListView" />
    <radListView items={items} on:itemSwipeProgressStarted="{onSwipeCellStarted}"
            swipeActions="true" transition:fade="{{duration: 1000 }}">
        <Template type="{ListViewViewType.ItemView}" let:item>
            <stackLayout style="background-color: white">
                <label>{item}</label>
            </stackLayout>
        </Template>
        <Template type="{ListViewViewType.ItemSwipeView}" let:item>
            <gridLayout columns="*,auto" backgroundColor="red">
                <stackLayout id="delete-view" col="1" on:tap="{() => doDelete(item)}">
                    <label class="far" text="&#xf2ed;"  />
                </stackLayout>
            </gridLayout>
        </Template>
    </radListView>
</page>

<script>
    import { fade } from 'svelte-native/transitions'
    import { Template } from 'svelte-native/components'
    import { ListViewViewType } from "nativescript-ui-listview"

    let items = (new Array(50).fill()).map((_, i) => `Item ${i}`)

    function doDelete(item) {
        console.log('trying to delete ',item);
        let idx = items.indexOf(item);
        console.log("deleting item at index "+ idx + " which is "+ items[idx])
        items.splice(idx,1);
        items = [...items];
    }

    function onSwipeCellStarted(e) {
        var swipeLimits = e.data.swipeLimits;
        var swipeView = e.object;
        var rightItem = e.object.getViewById('delete-view');
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    }
</script>