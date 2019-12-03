import React, { Component } from 'react';

import { Funnel } from 'funnel-react';

const data = [
  {
      "_id": "5de52b4ac4275a463f912042",
      "item": "accepted",
      "label": "Aceptados",
      "percent": 100,
      "quantity": 35
  },
  {
      "_id": "5de52b4ac4275a463f912041",
      "item": "visitors",
      "label": "Visitantes",
      "percent": "25.71",
      "quantity": 9
  },
  {
      "_id": "5de52b4ac4275a463f912040",
      "item": "postulants",
      "label": "Postulantes",
      "percent": 0,
      "quantity": 0
  },
  {
      "_id": "5de52b4ac4275a463f91203f",
      "item": "inprocess",
      "label": "En proceso",
      "percent": 0,
      "quantity": 0
  },
  {
      "_id": "5de52b4ac4275a463f91203e",
      "item": "finalists",
      "label": "Finalistas",
      "percent": 0,
      "quantity": 0
  }
]
class App extends Component {
  render() {
    return (
      <Funnel
      labelKey='label'
      height={252}
      valueKey='quantity'
      width={800}
      data={data} />
    )
  }
}

export default App;