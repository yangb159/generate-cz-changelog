/**
 *demo
 *
 */

module.exports = {
    types: {
        feat: {
            description: '新功能',
            title: 'Features'
        },
        fix: {
            description: '问题修复',
            title: 'Bug Fixes'
        },
        docs: {
            description: '更改文档',
            title: 'Documentation'
        },
        optimization: {
            description: '代码优化',
            title: 'Optimization'
        }
    },
    steps: {
        type: {
            message: '请选择提交类型'
        },
        subject: {
            message: '一句话介绍本次更改'
        },
        body: {
            message: '详细介绍本次更改'
        },
    },
    message: {
        maxLength: '最长输入100个字符'
    }

}