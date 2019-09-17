# `@cypherlab/esm-import`


🔧 ESM import utility

<a href="https://www.npmjs.com/package/@cypherlab/esm-import">
  <img alt="npm" src="https://img.shields.io/npm/v/@cypherlab/esm-import">
</a>


## Usage 

It's a utility that can import an ES file from different sources, with a fallback mechanism.  
The main usage is by specifying your local/dev sources first, and fallback sources after.  
Sources can be localhost or external, but always use http protocol.

You can specify a second argument to choose what is returned from the module.  
By default it returns the `default` export, but you can pass either a `string` or a function `(module) => module.myExportedKey`.

```js
<script async type="module">
  import esmImport from 'https://unpkg.com/@cypherlab/esm-import'

  const MyComponent = await esmImport([
      `http://localhost/dist/index.js`            // local import
    , 'https://unpkg.com/@cypherlab/react-table'  // external import
  ], m => m.default)
</script>
```