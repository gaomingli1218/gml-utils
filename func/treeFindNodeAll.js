var getConfig = require('./helperTreeGetConfig')
function treeFindNodeAll(tree, func, config = {}) { // 查找符合条件的所有节点
    config = getConfig(config)
    const {
        children
    } = config, list = [...tree], result = []
    for (let node of list) {
        func(node) && result.push(node)
        node[children] && list.push(...node[children])
    }
    return result
}
module.exports = treeFindNodeAll