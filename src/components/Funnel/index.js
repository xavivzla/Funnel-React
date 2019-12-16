import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import FunnelGraph from '../../lib/init'

const normalizeData = (data, key) => data.map(item => item[key])

const renderPipeline = (config) => {
  var graph = new FunnelGraph(config)
  graph.draw()
}

const Funnel = props => {
  const funnelRef = useRef(null)

  useEffect(() => {
    const {
      data,
      labelKey,
      valueKey,
      height,
      width,
      colors,
      gradientDirection,
      colorPercent,
      colorLabel,
      responsive
    } = props

    renderPipeline({
      container: funnelRef.current,
      data: {
        colors,
        labels: props.hasOwnProperty('labelKey') ? normalizeData(data, labelKey) : [],
        values: props.hasOwnProperty('valueKey') ? normalizeData(data, valueKey) : []
      },
      displayPercent: props.displayPercent,
      gradientDirection,
      height,
      colorPercent,
      colorLabel,
      responsive,
      width
    })
    
  }, [props])

  return <div ref={funnelRef} />
}


Funnel.propTypes = {
  data:  PropTypes.array.isRequired,
  valueKey: PropTypes.string.isRequired,
  labelKey: PropTypes.string,
  height: PropTypes.number.isRequired,
  colorPercent: PropTypes.string,
  colorLabel: PropTypes.string,
  responsive: PropTypes.bool
};

export default Funnel
 
