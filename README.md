<p align="center">
  <a href="https://github.com/xavivzla" rel="noopener" target="_blank"><img width="150" src="https://raw.githubusercontent.com/xavivzla/Funnel-React/dev/logo.png" alt="Funnel-react logo"></a></p>
</p>

<h1></h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/funnel-react.svg)](https://www.npmjs.com/package/funnel-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

</div>

<p align="center">
  <a href="https://github.com/xavivzla" rel="noopener" target="_blank"><img width="600" src="https://raw.githubusercontent.com/xavivzla/Funnel-React/dev/funnel.gif" alt="Funnel-react logo"></a></p>
</p>

## Install

```bash
npm install --save funnel-react
```

> or

```bash
yarn add funnel-react
```

## Usage

```jsx

import { Funnel } from 'funnel-react';

```

##Simple example

```jsx

<Funnel
  height={252}
  colors={{
    graph: [ '#1890FF', '#BAE7FF' ],
    percent: 'red',
    label: 'yellow',
    value: 'orange'
  }}
  valueKey='quantity'
  width={800}
  data={data} />

```

##Render prop example

```jsx
const data = [
  {
      "label": "Aceptados",
      "quantity": 135
  },
  ...{}
]

  <Funnel
  labelKey='label'
  height={252}
  colors={{
    graph: [ '#1890FF', '#BAE7FF' ], // array or string : 'red' || '#666'
    percent: 'red',
    label: 'yellow',
    value: 'orange'
  }}
  valueKey='quantity' 
  width={800}
  displayPercent={true}
  data={data} />

```

| props          | Type            | Default Value          | Options      |
| -------------  |:--------------: | :--------------------: | :----------: |
| labelKey       | string          |                        |              |
| colors         | object          |                        |              |
| valueKey       | string          |                        |              |
| width          | number          | container width        |              |
| displayPercent | boolean         | false                  | false / true |
| data           | array           |                        |              |

## License

MIT © [xavivzla](https://github.com/xavivzla)