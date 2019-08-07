import * as _ from 'lodash'

var arr = [1]

console.log(_.concat(arr, 3, { a: 1 }))
function component() {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())
