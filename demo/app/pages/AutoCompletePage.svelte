<page>
    <actionBar title="RadAutoComplete" />
    <stackLayout>
    <label text="Artist:" class="label" margin="20 10"/>
    <radAutoCompleteTextView items="{ items }" suggestMode="{ AutoCompleteSuggestMode.SuggestAppend }" displayMode="{AutoCompleteDisplayMode.Tokens}" completionMode="Contains">
        <suggestionView suggestionViewHeight="300">
            <Template let:item>
                <stackLayout orientation="horizontal" height="40">
                    <image src="{ item.image }" class="fas" width="25" margin="10"/>
                    <label text="{ item.text }" marginLeft="10" verticalAlignment="center"/>
                </stackLayout>
            </Template>
        </suggestionView>
    </radAutoCompleteTextView>
    </stackLayout>
</page>

<script>
    import { Template } from 'svelte-native/components'
    import { ObservableArray } from 'tns-core-modules/data/observable-array'
    import { TokenModel, AutoCompleteSuggestMode, AutoCompleteDisplayMode } from "nativescript-ui-autocomplete"
    AutoCompleteSuggestMode.SuggestAppend
    var artists = [
        {
            text: "Arcade Fire",
            image: "font://\uf06d"
        },
        {
            text: "Bon Iver",
            image: "font://\uf06e"
        },
        {
            text: "Daft Punk",
            image: "font://\uf06f"
        },
        {
            text: "Elbow",
            image: "font://\uf070"
        }
    ];

    let items = new ObservableArray(artists.map(a => new TokenModel(a.text, a.image)));
</script>