/* eslint-disable no-trailing-spaces */
import { roundPoint, formatNumber } from './number'
import { createPath } from './path'
import {
  getDefaultColors,
  createSVGElement,
  setAttrs
} from './graph'

import jss from 'jss'
import preset from 'jss-preset-default'

import styles from './styles'


jss.setup(preset())
class FunnelGraph {
  constructor(options) {
    // if(FunnelGraph.instance) {
    //   return FunnelGraph.instance
    // }

    this.styles = jss.createStyleSheet(styles).attach()
    this.data = options.data
    this.gradientDirection = (options.gradientDirection && options.gradientDirection === 'vertical') ?
      'vertical' :
      'horizontal'
    this.container = options.container || null // ref del container que llega por props
    this.graphContainer = null // node de contenedor para el svg
    this.height = options.height
    this.width = options.width
    this.labels = FunnelGraph.getLabels(options)
    this.customPercents = FunnelGraph.getCustomPercents(options)
    this.values = FunnelGraph.getValues(options)
    this.displayPercent = options.displayPercent || false
    this.percentages = this.createPercentages()
    this.responsive = options.responsive || false
    // colors
    this.colorPercent = this.getColorPercent()
    this.colorLabel = this.getColorLabel()
    this.colorValue = this.getColorValue()
    this.colorGraph = this.getColorGraph()
    // FunnelGraph.instance = this
  }

  // validate get data and correct format
  validateData() {
    if(!this.values.length){
      console.error('Warning: The funnel component is waiting for a data property as an array.')
      console.log('%c%s',
      'color: white; background: black; font-size: 14px; padding: 15px;',
      'example: [11,22,33,44]. more info => https://google.com')
    }else {
      return true
    }
  }

  // crea el contenedor para el svg
  createContainer() {
    const { classes } = this.styles
    if(!this.container) 
      throw new Error('Container is missing')
      
      this.container.innerHTML = ''
      this.container.classList.add(classes.svgFunnelContainer)
      
    this.graphContainer = document.createElement('div')
    this.graphContainer.classList.add(classes.svgFunnelGraphContainer)
    this.container.appendChild(this.graphContainer)
  }

  // static

  static getCustomPercents(options) {
    if(!options.data) 
      throw new Error('Data is missing')

    const { data } = options

    if(typeof data.percents === 'undefined') false

    return data.percents
  }

  static getLabels(options) {
    if(!options.data) 
      throw new Error('Data is missing')

    const { data } = options

    if(typeof data.labels === 'undefined') return []

    return data.labels
  }

  static getValues(options) {
    if(!options.data) 
      return []

    const { data } = options

    if(typeof data === 'object') 
      return data.values

    return []
  }
  // end static

  // Gets 
  getColorLabel() {
    const color = this.data.colors.label || 'gray'

    return color
  }

  getColorValue() {
    const color = this.data.colors.value || 'gray'
    
    return color
  }

  getColorPercent() {
    const color = this.data.colors.percent || 'gray'
    
    return color
  }

  getColorGraph() {
    const color = this.data.colors.graph || getDefaultColors()

    return color
  }

  getDataSize() {
    return this.values.length
  }

  getWidth() {
    return this.width || this.graphContainer.clientWidth
  }

  getHeight() {
    return this.height || this.graphContainer.clientHeight
  }
  
  getSVG() {
    const svg = this.container.querySelector('svg')

    if(!svg) 
      throw new Error('No SVG found inside of the container')

    return svg
  }

  getPathDefinitions() {
    const valuesNum = this.getCrossAxisPoints().length - 1
    const paths = []
    for (let i = 0; i < valuesNum; i++) {
      const X = this.getMainAxisPoints()
      // traigo los valores del array en la primera posicion
      const Y = this.getCrossAxisPoints()[i]
      // traigo los valores del array en la segnda posicion
      const YNext = this.getCrossAxisPoints()[i + 1]
  
      const d = createPath(i, X, Y, YNext)
      paths.push(d)
    }

    return paths
  }

  getCrossAxisPoints() {
    const points = []
    const fullDimension = this.getHeight()
    const dimension = fullDimension / 2

    // busco el valor mas alto
    const max = Math.max(...this.values)
    // ordeno la data de mayor a menor y duplico el ultimo valor
    const values = [ ...this.values ].concat([ ...this.values ].pop())
    // obtengo los decimales
    points.push(values.map(value => roundPoint((max - value) / max * dimension)))
    // obtengo el segundo array para el cierre de path
    points.push(points[0].map(point => fullDimension - point))

    return points
  }

  getMainAxisPoints() {
    const size = this.getDataSize()
    const points = []
    const fullDimension = this.getWidth()

    for (let i = 0; i <= size; i++) 
      points.push(roundPoint(fullDimension * i / size))

    return points
  }
  // end Gets 

  applyGradient(svg, path, colors, index) {
    const defs = (svg.querySelector('defs') === null) ?
      createSVGElement('defs', svg) :
      svg.querySelector('defs')
    const gradientName = `funnelGradient-${index}`
    const gradient = createSVGElement('linearGradient', defs, {
      id: gradientName
    })

    if(this.gradientDirection === 'vertical') 
      setAttrs(gradient, {
        x1: '0',
        x2: '0',
        y1: '0',
        y2: '1'
      })

    const numberOfColors = colors.length

    for (let i = 0; i < numberOfColors; i++) 
      createSVGElement('stop', gradient, {
        offset      : `${Math.round(100 * i / (numberOfColors - 1))}%`,
        'stop-color': colors[i]
      })
      
    setAttrs(path, {
      fill  : `url("#${gradientName}")`,
      stroke: `url("#${gradientName}")`
    })
  }

  createPercentages() {
    let { values } = this

    const max = Math.max(...values)

    return values.map(value => roundPoint(value * 100 / max))
  }

  addLabels() {
    const { classes } = this.styles
    const holder = document.createElement('div')
    holder.setAttribute('class', classes.svgFunnelLabels)
    this.percentages.forEach((percentage, index) => {
      const labelElement = document.createElement('div')
      labelElement.setAttribute('class', classes.svgFunnelLabel)

      const title = document.createElement('div')
      title.setAttribute('class', classes.svgFunnelLabelTitle)
      title.setAttribute('style', `color: ${this.colorLabel}`)
      title.textContent = this.labels[index] || ''

      const value = document.createElement('div')
      value.setAttribute('class', classes.svgFunnelLabelValue)
      value.setAttribute('style', `color: ${this.colorValue}`)

      const valueNumber = this.values[index]
      value.textContent = formatNumber(valueNumber)

      const percentageValue = document.createElement('div')
      percentageValue.setAttribute('class', classes.svgFunnelLabelPercentage)
      percentageValue.setAttribute('style', `color: ${this.colorPercent}; margin-top: ${this.getCrossAxisPoints()[0][index] + 20}px`)

      if(percentage) {
        percentageValue.textContent = this.customPercents ?
          `${this.customPercents[index].toString()}%` : `${percentage.toString()}%`
      }

      labelElement.appendChild(value)
      labelElement.appendChild(title)
      if(this.displayPercent) 
        labelElement.appendChild(percentageValue)

      holder.appendChild(labelElement)
    })

    this.container.appendChild(holder)
  }

  makeSVG() {
    const { classes } = this.styles
    const svg = createSVGElement('svg', this.graphContainer, {
      height             : this.getHeight(),
      preserveAspectRatio: 'none',
      viewBox            : `0 0 ${this.getWidth()} ${this.getHeight()}`,
      width              : this.responsive ? '100%' : this.getWidth()
    })

    svg.classList.add(classes.svgFunnelCanvas)

    const valuesNum = this.getCrossAxisPoints().length - 1
    for (let i = 0; i < valuesNum; i++) {
      const path = createSVGElement('path', svg)

      const color = this.colorGraph
      const fillMode = (typeof color === 'string' || color.length === 1) ? 'solid' : 'gradient'

      if(fillMode === 'solid') 
        setAttrs(path, {
          fill  : color,
          stroke: color
        })
      else if(fillMode === 'gradient') 
        this.applyGradient(svg, path, color, i + 1)

      svg.appendChild(path)
    }

    this.graphContainer.appendChild(svg)
  }

  svgAddResponsive() {
    const svg = this.getSVG()
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
  }

  drawPaths() {
    const { classes } = this.styles
    const svg = this.getSVG()
    // obtengo el nodo del patch dentro del svg
    const paths = svg.querySelectorAll('path')
    const definitions = this.getPathDefinitions()
    
    // seteo el path
    definitions.map((path, index) => {
      
      paths[index].setAttribute('d', path)
      paths[index].classList.add(classes.svgFunnelAnimation)
    })
  }
  
  draw() {
    if(this.validateData()){
        this.createContainer()
        this.makeSVG()
    
        this.addLabels()
    
        this.drawPaths()
    }
  }
}

export default FunnelGraph
