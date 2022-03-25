var getConfig = require('./helperTreeGetConfig')
function treeFindNode(tree, func, config = {}) { // 查找符合条件的单个节点 返回广度优先遍历查找到的第一个符合条件(callback(node)为true)的节点，没有则返回null
    config = getConfig(config)
    const {
        children
    } = config, list = [...tree]
    for (let node of list) {
        if (func(node)) return node
        node[children] && list.push(...node[children])
    }
    return null
}

module.exports = treeFindNode

