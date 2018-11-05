# js-component-tab
## 组件功能
点击tab，展现对应的panel面板，页面中不同的选项卡是相互独立的。
## 组件实现方式
1. 定义一个构造函数，参数为一个node节点，并绑定到实例上，执行初始化函数
```
function Tab(node) {
    this.node = node
    this.init()
}
```
2. 重写构造函数的原型属性。为点击的a标签添加active类，并为其兄弟元素移除active类。
  为对应的panel添加active类，并为其兄弟元素移除active类
```
Tab.prototype = {
    constructor: Tab,
    init: function () {
        this.bind()
    },
    bind: function () {
        this.node.querySelectorAll('a').forEach(function (aNode) {
            aNode.onclick = function (e) {
                var _this = this
                var index
                e.preventDefault()
                this.parentElement.querySelectorAll('a').forEach(function (tab, idx) {
                    tab.classList.remove('active')
                    if (_this === tab) {
                        index = idx
                    }
                })
                this.classList.add('active')
                this.parentElement.nextElementSibling.querySelectorAll('.panel').forEach(function (panel) {
                    panel.classList.remove('active')
                })
                this.parentElement.nextElementSibling.querySelectorAll('.panel')[index].classList.add('active')
            }
        })
    }
}
```
3. 如何使用
```
var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);
```
