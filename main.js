// document.querySelectorAll('.tab-header a').forEach(function(node) {
//   node.onclick = function(e) {
//     var index
//     e.preventDefault()
//     node.parentElement.querySelectorAll('a').forEach(function(tab, idx) {
//       tab.classList.remove('active')
//       if (node === tab) {
//         index = idx
//       }
//     })
//     this.classList.add('active')

//     this.parentElement.nextElementSibling.querySelectorAll('.panel').forEach(function(panel) {
//       panel.classList.remove('active')

//     })
//  this.parentElement.nextElementSibling.querySelectorAll('.panel')[index].classList.add('active')
//   }
// })
function Tab(node) {
    this.node = node
    this.init()
}
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
var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);







