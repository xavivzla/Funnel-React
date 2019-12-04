import React, { useState, useEffect, useRef } from 'react'

import FunnelGraph from '../../lib/init'

import style from '../../lib/funnel.css'

const normalizeData = (data, key) => data.map(item => item[key])

const renderPipeline = (config) => {
  var graph = new FunnelGraph({
    // container: '.funnel',
    ...config
  })

  graph.draw()
}

const Funnel = props => {
  const funnelRef = useRef(null)

  useEffect(() => {

    renderPipeline({
      container: funnelRef.current,
      data: {
        // colors,
        labels: props.hasOwnProperty('labelKey') ? normalizeData(props.data, props.labelKey) : [],
        // percents,
        values: props.hasOwnProperty('valueKey') ? normalizeData(props.data, props.valueKey) : []
      },
      displayPercent: props.displayPercent,
      // gradientDirection,
      height: props.height,
      // responsive,
      width: props.width
    })
    
  }, [props])

  return <div ref={funnelRef} />
}

export default Funnel

