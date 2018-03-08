const gray = 'color: #888'
const green = 'color: #05823d'
const blue = 'color: blue'

module.exports = function log (info) {
  let prefix
  const isAction = info.type === 'action'
  const isUpdate = info.type === 'update'

  const label = info.sourceActions
    .map(actionName)
    .concat(isAction ? ['%c' + actionName(info.action)] : !info.sourceActions.length ? ['——'] : [])
    .join(' → ') + (!isAction ? '%c' : '')

  if (isAction) {
    prefix = !info.sourceActions.length ? '••' : ' •'
    console.groupCollapsed(prefix + ' %c' + label, gray, green, 'payload', ifUndefined(info.action.payload, '∅'))
    console.log('type %caction', blue)
    console.log('action', info.action)
    console.log('source', info.sourceActions)
    console.groupEnd()
  }

  if (isUpdate) {
    prefix = !info.sourceActions.length ? '••' : '  '
    console.groupCollapsed(prefix + ' %c' + label, gray, green, 'update ', ifUndefined(info.action.payload, '∅'))
    console.log('type %cupdate', blue)
    console.log('action', info.action)
    console.log('source', info.sourceActions)
    console.log('patch', info.action.payload)
    console.log('prevState', info.prevState)
    console.log('currState', info.atom.get())
    console.groupEnd()
  }
}

function actionName (action) {
  return action.type + ' (' + action.seq + ')'
}

function ifUndefined (val, fallback) {
  return typeof val === 'undefined' ? fallback : val
}