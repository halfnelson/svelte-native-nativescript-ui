const fs = require('fs')
const path = require('path')
const packageFileContent = fs.readFileSync(path.resolve(__dirname, '../package.json'), { encoding: "utf8" });
const rootPackageContent = JSON.parse(packageFileContent);

let desiredKeys = [
    "name",
    "version",
    "description",
    "author",
    "license",
    "peerDependencies",
    "keywords",
    "homepage",
    "repository",
    "types"
]

let destinationPackageContent = {}

for (let key of desiredKeys) {
    destinationPackageContent[key] = rootPackageContent[key]
}

Object.assign(destinationPackageContent, {
    ...destinationPackageContent
})

const finalFileContent = JSON.stringify(destinationPackageContent, null, 4)
fs.writeFileSync(path.resolve(__dirname, "../dist/package.json"), finalFileContent)

//Copy our readme and license file
const filesToCopy = ["Readme.md", "LICENSE", "CHANGELOG.md"]
for (let file of filesToCopy) {
    fs.copyFileSync(path.resolve(__dirname, `../${file}`), path.resolve(__dirname, `../dist/${file}`))
}

const typeDefsToCopy = [
    "svelte-native-jsx-nativescript-ui-autocomplete.d.ts",
    "svelte-native-jsx-nativescript-ui-calendar.d.ts",
    "svelte-native-jsx-nativescript-ui-chart.d.ts",
    "svelte-native-jsx-nativescript-ui-dataform.d.ts",
    "svelte-native-jsx-nativescript-ui-gauge.d.ts",
    "svelte-native-jsx-nativescript-ui-listview.d.ts",
    "svelte-native-jsx-nativescript-ui-sidedrawer.d.ts",
]

for (let file of typeDefsToCopy) {
    fs.copyFileSync(path.resolve(__dirname, `../src/${file}`), path.resolve(__dirname, `../dist/${file}`))
}

// inject our JSX types
const modules = ["autocomplete", "calendar", "chart", "dataform", "gauge", "listview", "sidedrawer"]
for (let mod of modules) {
    var indexdtspath = path.resolve(__dirname, `../dist/${mod}/index.d.ts`);
    var indexdts = fs.readFileSync(indexdtspath, "utf-8");
    fs.writeFileSync(indexdtspath, indexdts + `\n\nimport '../svelte-native-jsx-nativescript-ui-${mod}'\n`, "utf-8");
}