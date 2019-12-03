import { roundPoint } from './number'

const createCurves = (x1, y1, x2, y2) => ` C${roundPoint((x2 + x1) / 2)},${y1} ` +
    `${roundPoint((x2 + x1) / 2)},${y2} ${x2},${y2}`

const createPath = (index, X, Y, YNext) => {
  let str = `M${X[0]},${Y[0]}`

  for (let i = 0; i < X.length - 1; i++)
    str += createCurves(X[i], Y[i], X[i + 1], Y[i + 1])

  str += ` L${[ ...X ].pop()},${[ ...YNext ].pop()}`

  for (let i = X.length - 1; i > 0; i--)
    str += createCurves(X[i], YNext[i], X[i - 1], YNext[i - 1])

  str += ' Z'

  return str
}

export {
  createCurves, createPath
}
