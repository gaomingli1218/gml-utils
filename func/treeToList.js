var getConfig = require('./helperTreeGetConfig')

function treeToList(tree, clear, config = {}) { // 树结构转列表结构
    config = getConfig(config)
    var {
        children
    } = config, result = [...tree]
    for (let i = 0; i < result.length; i++) {
        if (!result[i][children] || !result[i][children].length) {
            clear && delete result[i][children]
            continue
        }
        result.splice(i + 1, 0, ...result[i][children])
        clear && delete result[i][children]
    }
    return result
}
module.exports = treeToList