var getConfig = require('./helperTreeGetConfig')

function fromListToTree(list, config = {}) { // 列表结构转树结构
    config = getConfig(config)
    var nodeMap = new Map(),
        result = [],
        {
            id,
            children,
            pid
        } = config
    for (var node of list) {
        node[children] = node[children] || []
        nodeMap.set(node[id], node)
    }
    for (var node of list) {
        var parent = nodeMap.get(node[pid]);
        (parent ? parent.children : result).push(node)
    }
    return result
}
module.exports = fromListToTree