import React, { Component } from 'react';

import { Funnel } from 'funnel-react';

const data = [
  {
      "_id": "5de52b4ac4275a463f912042",
      "item": "accepted",
      "label": "Aceptados",
      "percent": 100,
      "quantity": 135
  },
  {
      "_id": "5de52b4ac4275a463f912041",
      "item": "visitors",
      "label": "Visitantes",
      "percent": "25.71",
      "quantity": 100
  },
  {
      "_id": "5de52b4ac4275a463f912040",
      "item": "postulants",
      "label": "Postulantes",
      "percent": 0,
      "quantity": 60
  },
  {
      "_id": "5de52b4ac4275a463f91203f",
      "item": "inprocess",
      "label": "En proceso",
      "percent": 0,
      "quantity": 20
  },
  {
      "_id": "5de52b4ac4275a463f91203e",
      "item": "finalists",
      "label": "Finalistas",
      "percent": 0,
      "quantity": 5
  }
]
class App extends Component {
  render() {
    return (
      <div
        style={{
          background: '#000000',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{width: 800}}>
            <Funnel
            labelKey='label'
            height={252}
            colors={[ '#1890FF', '#BAE7FF' ]}
            colorPercent='#fff'
            colorLabel='#fff'
            valueKey='quantity'
            width={800}
            responsive={true}
            displayPercent={true}
            data={data} />
          </div>
      </div>
    )
  }
}

export default App;