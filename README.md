# `@cypherlab/esm-import`


Advanced Table 

<a href="https://www.npmjs.com/package/@cypherlab/esm-import">
  <img alt="npm" src="https://img.shields.io/npm/v/@cypherlab/esm-import">
</a>

## Install
```
npm i @cypherlab/esm-import
```


## Usage 

```js
<script async type="module">
  const esmImport = (await import('https://unpkg.com/@cypherlab/esm-import')).default 

  const MyComponent = await esmImport([
      '/dist/index.js' // local import
    , 'https://unpkg.com/@cypherlab/react-table' // global import
  ])
</script>
```