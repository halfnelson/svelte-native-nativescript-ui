<page>
    <Header title="RadListView" >
        {#if layoutType == "linear"}
            <actionItem icon="font://&#xf58e;" class="fas" on:tap={() => layoutType = "grid"}></actionItem>
        {:else if layoutType == "grid"}
            <actionItem icon="font://&#xf00b;" class="fas" on:tap={() => layoutType = "linear"}></actionItem>
        {/if}
    </Header>
    <radListView items={items}
            swipeActions="true" 
            pullToRefresh="true"
            itemReorder="true"
            loadOnDemandMode="{ListViewLoadOnDemandMode.Manual}"
            itemTemplateSelector="{selectTemplate}"
            groupingFunction={groupSelector}
            on:itemTap="{onItemTap}"
            on:itemReordered="{onItemReordered}"
            on:pullToRefreshInitiated="{onPullToRefreshInitiated}"
            on:loadMoreDataRequested="{onLoadMoreDataRequested}"
            on:itemSwipeProgressStarted="{onitemSwipeProgressStarted}">

        <radListView.listViewLayout>
            {#if layoutType == "grid"}
                <listViewGridLayout />
            {:else}
                <listViewLinearLayout />
            {/if}
        </radListView.listViewLayout>
        
        <Template type="{ListViewViewType.ItemView}" key="even" let:item>
            <gridLayout columns="auto,*" class="item-template">
                <image src="{item.image}" class="far" />
                <stackLayout col="1" >
                    <label style="font-size: 20">{item.name}</label>
                    <label style="font-size: 10">{item.description}</label>
                </stackLayout>
            </gridLayout>
        </Template>

         <Template type="{ListViewViewType.ItemView}" key="odd" let:item>
            <gridLayout columns="*, auto" class="item-template odd">
                <stackLayout>
                    <label style="font-size: 20">{item.name}</label>
                    <label style="font-size: 10">{item.description}</label>
                </stackLayout>
                <image col="1" src="{item.image}" class="far" />
            </gridLayout>
        </Template>

        <Template type="{ListViewViewType.HeaderView}" > 
            <label class="header">This is a Header</label>
        </Template>

        <Template type="{ListViewViewType.FooterView}" > 
            <label class="footer">This is a Footer</label>
        </Template>

        <Template type="{ListViewViewType.GroupView}" let:item> 
            <label class="group">{item}</label>
        </Template>

        <Template type="{ListViewViewType.ItemSwipeView}">
            <gridLayout columns="*,auto" backgroundColor="red">
                <label id="delete-view" col="1"  on:tap="{e => doDelete(e.view.bindingContext)}" class="far" text="&#xf2ed;"  />
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

    .group {
        font-weight: bold;
        background-color: seagreen;
        color: white;
        font-size: 18;
        margin: 0;
        padding: 10;
    }

    .header {
        font-weight: bold;
        font-size: 18;
        color: seagreen;
        padding: 15;
        text-align: center;
    }

    .footer {
        font-size: 12;
        background-color: seagreen;
        color: white;
        text-align: center;   
    }

    .item-template image {
        margin-left: 10;
        margin-right: 5;
        height: 40;
        width: 40;
    }
</style>

<script>
    import Header from '../Header.svelte'
    import { Template } from 'svelte-native/components'
    import { ObservableArray } from 'tns-core-modules/data/observable-array'
    import { ListViewViewType, ListViewLoadOnDemandMode, ListViewLinearLayout, ListViewGridLayout, ListViewItemAnimation } from "nativescript-ui-listview"

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
    let layoutType = "linear";

    function generateItems(count, offset=0) {
        return (new Array(count).fill()).map((_, i) => ({ index: i, name: `Item ${i+offset}`, description: `Item ${i+offset} description`, image: images[(i+offset) % images.length]}))
    }
    
    let items = new ObservableArray(generateItems(50));

    function doDelete(item) {
        let idx = items.indexOf(item);
        items.splice(idx,1);
    }

    function onItemTap({index}) {
        alert(`Item tapped: ${items.getItem(index).name}`);
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
        items.unshift({ name: `Refreshed item ${refreshedCount}`, description: `Item ${refreshedCount} was loaded via refresh`, image: images[refreshedCount % images.length] });
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
                items.push(generateItems(50, items.length));
                listview.notifyLoadOnDemandFinished(items.length >= 150);
            }, 1500);
            args.returnValue = true;
        }
    }

    function selectTemplate(item, index, items) {
        return  (index % 2 == 0) ? "even" : "odd";
    }

    function groupSelector(item) {
        return item.index < 20 ? "Under 20" : "Over 20";
    }
</script>