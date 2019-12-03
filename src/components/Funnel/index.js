import React, { useEffect } from 'react'

import FunnelGraph from '../../lib/init'

// import './funnel.css'

const renderPipeline = (config) => {
  var graph = new FunnelGraph({
    container: '.funnel',
    ...config
  })

  graph.draw()
}

const Funnel = ({
  colors,
  labels,
  percents,
  values,
  displayPercent,
  gradientDirection,
  height,
  width,
  responsive
}) => {
  useEffect(() => {
    renderPipeline({
      data: {
        colors,
        labels,
        percents,
        values
      },
      displayPercent,
      gradientDirection,
      height,
      responsive,
      width
    })
  }, [])

  return (
    <div className='flex'>
      <div className='funnel'>
      </div>
    </div>
  )
}

export default Funnel

