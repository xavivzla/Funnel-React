// si es un solo color asigno los estilos como atributos
const setAttrs = (element, attributes) => {
  if (typeof attributes === 'object')
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key])
    })
}

const createSVGElement = (element, container, attributes) => {
  const el = document.createElementNS('http://www.w3.org/2000/svg', element)

  if (typeof attributes === 'object')
    setAttrs(el, attributes)

  if (typeof container !== 'undefined')
    container.appendChild(el)

  return el
}

const defaultColors = [
  '#FF4589', '#FF5050',
  '#05DF9D', '#4FF2FD',
  '#2D9CDB', '#A0BBFF',
  '#FFD76F', '#F2C94C',
  '#FF9A9A', '#FFB178'
]

const getDefaultColors = () => defaultColors

export {
  getDefaultColors, createSVGElement, setAttrs, defaultColors
}
