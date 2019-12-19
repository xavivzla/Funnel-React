import React, { useEffect, useRef } from 'react'
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
      responsive,
      width
    })
    
  }, [])

  return <div ref={funnelRef} />
}


Funnel.propTypes = {
  data:  PropTypes.array.isRequired,
  valueKey: PropTypes.string.isRequired,
  labelKey: PropTypes.string,
  height: PropTypes.number.isRequired,
  colors: PropTypes.object,
  responsive: PropTypes.bool
};

export default React.memo(Funnel)
 
