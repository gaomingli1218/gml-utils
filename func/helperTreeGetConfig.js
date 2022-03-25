var DEFAULT_CONFIG = {
    id: 'id',
    children: 'children',
    pid: 'pid'
}
var getConfig = config => Object.assign({}, DEFAULT_CONFIG, config)
module.exports = getConfig