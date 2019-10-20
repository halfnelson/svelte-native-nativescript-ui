<page>
    <actionBar title="RadListView" />
    <radListView items={items} 
            swipeActions="true" 
            pullToRefresh="true"
            itemReorder="true"
            loadOnDemandMode="{ListViewLoadOnDemandMode.Manual}"
            on:itemTap="{onItemTap}"
            on:itemReordered="{onItemReordered}"
            on:pullToRefreshInitiated="{onPullToRefreshInitiated}"
            on:loadMoreDataRequested="{onLoadMoreDataRequested}"
            on:itemSwipeProgressStarted="{onitemSwipeProgressStarted}">
        <Template type="{ListViewViewType.ItemView}" let:item>
            <gridLayout columns="auto,*" class="item-template">
                <image src="{item.image}" class="far" />
                <stackLayout col="1" >
                    <label style="font-size: 20">{item.name}</label>
                    <label style="font-size: 10">{item.description}</label>
                </stackLayout>
            </gridLayout>
        </Template>
        <Template type="{ListViewViewType.ItemSwipeView}" let:item>
            <gridLayout columns="*,auto" backgroundColor="red">
                <label id="delete-view" col="1"  on:tap="{() => doDelete(item)}" class="far" text="&#xf2ed;"  />
            </gridLayout>
        </Template>
    </radListView>
</page>

<style>

    #delete-view {
        padding: 10 20;
        vertical-align: center;
        color: white;
    }

    .item-template {
        background-color: white;
    }

    .item-template label {
        padding: 0;
        margin: 0;
    }

    .item-template image {
        margin-left: 10;
        margin-right: 5;
        height: 40;
        width: 40;
    }
</style>

<script>
    import { fade } from 'svelte-native/transitions'
    import { Template } from 'svelte-native/components'
    import { ListViewViewType, ListViewLoadOnDemandMode } from "nativescript-ui-listview"

    let images = [
        "font://\uf567",
        "font://\uf579",
        "font://\uf119",
        "font://\uf57f",
        "font://\uf580",
        "font://\uf581",
        "font://\uf582",
        "font://\uf583",
        "font://\uf584",
        "font://\uf585",
        "font://\uf586",
        "font://\uf587",
        "font://\uf588",
        "font://\uf589",
        "font://\uf58A",
        "font://\uf58B",
        "font://\uf58C"
    ]

    function generateItems(count, offset=0) {
        return (new Array(count).fill()).map((_, i) => ({ name: `Item ${i+offset}`, description: `Item ${i+offset} description`, image: images[(i+offset) % images.length]}))
    }

    let items = generateItems(50);

    function doDelete(item) {
        let idx = items.indexOf(item);
        items = items.filter(i => i != item);
    }

    function onItemTap({index}) {
        alert(`Item tapped: ${items[index].name}`);
    }

    function onitemSwipeProgressStarted({data, swipeView}) {
        var swipeLimits = data.swipeLimits;
        var rightItemWidth = swipeView.getViewById('delete-view').getMeasuredWidth();
        swipeLimits.right = rightItemWidth;
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItemWidth / 2;
    }

    let refreshedCount = 0;

    function onPullToRefreshInitiated({object}) {
        refreshedCount++;
        items = [{ name: `Refreshed item ${refreshedCount}`, description: `Item ${refreshedCount} was loaded via refresh`, image: images[refreshedCount % images.length] }, ...items];
        object.notifyPullToRefreshFinished()
    }

    function onItemReordered({index, data, object}) {
        alert(`Item reordered from: ${index} to ${data.targetIndex}`);
    }

    function onLoadMoreDataRequested(args) {
        let listview = args.object;
        if (items.length >= 150) {
            args.returnValue = false;
            listview.notifyLoadOnDemandFinished(true);
        } else {
            setTimeout(() => {
                items = [...items, ...generateItems(50, items.length)]
                listview.notifyLoadOnDemandFinished(items.length >= 150);
            }, 1500);
            args.returnValue = true;
        }
    }
</script>