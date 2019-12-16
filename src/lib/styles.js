export default {
  svgFunnelLabels: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    boxSizing: 'border-box'
  },
  svgFunnelLabel: {
    '&:not(:first-child)': {
      backgroundImage: 'linear-gradient(#c0c0c0 40%, rgba(95, 95, 95, 0) 0%)',
      backgroundPosition: 'left',
      backgroundSize: '2px 14px',
      backgroundRepeat: 'repeat-y',
    },
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'forwards',
    animationIteration: 1,
    animationName: '$FadeIn',
    animationDuration: '3s, 1s, 1s',
    animationDelay: '0s, 3.5s, 3.5s',
    flex: '1 1 0',
    position: 'relative',
    paddingLeft: 24,
  },
  svgFunnelGraphContainer: {
    // width: '100%'
  },
  svgFunnelCanvas: {
    marginTop: 100
  },
  svgFunnelLabelPercentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1890FF'
  },
  svgFunnelLabelTitle: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#595959',
  },
  svgFunnelLabelValue: {
    fontSize: 14,
    color: '#1890FF',
    lineHeight: '18px',
    marginBottom: 6
  },
  svgFunnelContainer: {
    display: 'inline-block',
    position: 'relative',
    width: '100%'
  },
  svgFunnelAnimation: {
    fillOpacity: 0,
    strokeOpacity: 0,
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'forwards',
    animationIteration: 1,
    animationName: '$FillIn',
    animationDuration: '3s, 1s, 1s',
    animationDelay: '0s, 3.5s, 3.5s'
  },
  '@keyframes FadeIn': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  '@keyframes FillIn': {
    from: {
      fillOpacity: 0,
      stopOpacity: 0
    },
    to: {
      fillOpacity: 1,
      strokeOpacity: 1
    }
  }
}
