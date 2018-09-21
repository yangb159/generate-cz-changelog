# generate-cz-changelog

> cz-conventional-changelog的辅助工具，可让您自定义Commitizen过程中的提示。

This is a fork of [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog).


## 使用

* 安装

```npm i generate-cz-changelog -D```

* 使用

在你的项目中新建.cz-conventional-changelog文件夹，然后新建config.js，
自定义你的配置。最后更改package.json配置。

package.json配置
```json
"config": {
    "commitizen": {
      "path": "./node_modules/generate-cz-changelog"
    }
  }

```
自定义配置代码：
```js
module.exports = {
    types: {
            feature: {
                description: '新功能',
                title: 'Features'
            },
            hotfix: {
                description: '问题修复',
                title: 'Bug Fixes'
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
}

```

效果如下：

```$xslt
>  feature:        新功能
  hotfix:         问题修复
  optimization:   代码优化
  
  
一句话介绍本次更改


```