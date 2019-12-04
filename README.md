<p align="center">
  <a href="https://github.com/xavivzla" rel="noopener" target="_blank"><img width="150" src="https://raw.githubusercontent.com/xavivzla/Funnel-React/dev/logo.png" alt="Funnel-react logo"></a></p>
</p>

<h1></h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/funnel-react.svg)](https://www.npmjs.com/package/funnel-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

</div>



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
import React, { Component } from 'react';

import { Funnel } from 'funnel-react';

class App extends Component {
  render() {
    return (
        <Funnel
        labelKey='label' // 'label' ''
        height={252}
        colors={[ '#1890FF', '#BAE7FF' ]} // array or string
        valueKey='quantity'
        width={800}
        displayPercent={true}
        data={data} />
    )
  }
}

```

| props          | Type            | Default Value          | Options      |
| -------------  |:--------------: | :--------------------: | :----------: |
| labelKey       | string          |                        |              |
| colors         | array or string | ['#FF4589', '#FF5050'] |              |
| valueKey       | string          |                        |              |
| width          | number          | container width        |              |
| displayPercent | boolean         | false                  | false / true |
| data           | array           |                        |              |

## License

MIT © [xavivzla](https://github.com/xavivzla)