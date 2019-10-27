import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'


let externalModules = pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : []

let localModules = ["sidedrawer", "listview", "calendar", "chart", "dataform", "gauge"]

let plugins = [
  resolve({
    extensions: ['.mjs', '.js']
  }),
  typescript({
    typescript: require('typescript'),
    useTsconfigDeclarationDir: true
  })
]

function module_defs() {
  return localModules.map(mod => {
    return {
      input: `src/${mod}/index.ts`,
      output: [{
        file: `dist/${mod}/index.js`,
        format: 'cjs',
      }, {
        file: `dist/${mod}/index.mjs`,
        format: 'esm'
      }],
      external: (id) => externalModules.find(e => e == id || id.startsWith(e+'/') ) || id.startsWith('nativescript-ui'),
      plugins: plugins
    }
  })

}


export default [
  ...module_defs()
];