# Svelte Native - NativeScript UI

Provides support for using [NativeScript UI](https://docs.nativescript.org/ui/overview#nativescript-ui-overview) in [Svelte Native](https://svelte-native.technology) Applications


## Usage

npm install any support nativescript ui packages you wish to use.

Currently supported:

* RadSideDrawer ([nativescript-ui-sidedrawer](https://www.npmjs.com/package/nativescript-ui-sidedrawer))
* RadListView ([nativescript-ui-listview](https://www.npmjs.com/package/nativescript-ui-listview))
    

In your project's `app.ts` file, add:

```js
//import the components you are using
import SideDrawer from 'svelte-native-nativescript-ui/sidedrawer';
import ListView from 'svelte-native-nativescript-ui/listview';

//register them with svelte-native so they can be used in svelte components
SideDrawer.register(); 
ListView.register();
```

Then use them in your `.svelte` components: 

```html
<page>
  <radSideDrawer>
    ...
    <radListView>
        ...
    </radListView>
  </radSideDrawer>
</page>
```