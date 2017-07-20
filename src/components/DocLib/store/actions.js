import * as types from './mutation-types'

export default {
  // // treeData
  // renderContent (h, { node, data, store }) {
  //   // //设置是否为叶子节点，默认全不是,分级加载使用
  //   // if (node.isleaf=='true') {
  //   //       node.isLeaf=true;
  //   // }
  //   // jsx形式 实现模板的渲染
  //   return (
  //     <span>
  //       <span>
  //         <span>{node.label}</span>
  //       </span>
  //       <span style='float: right; margin-right: 20px'>
  //         <el-button size='mini' on-click={ () => this.append(store, data) }>Append</el-button>
  //         <el-button size='mini' on-click={ () => this.remove(store, data) }>Delete</el-button>
  //       </span>
  //     </span>)
  // },
  // // 添加
  // append (commit, {store, data}) {
  //   store.append({ id: commit(mutations.idIncrement), label: 'testtest', children: [] }, data)
  // },
  // // 删除
  // remove (store, data) {
  //   store.remove(data)
  // },
  // // renderContent (h, { node, data, store }) {
  // //   // //设置是否为叶子节点，默认全不是
  // //   // if (node.isleaf=='true') {
  // //   //       node.isLeaf=true;
  // //   // }
  // //   return (
  // //     h('span', {
  // //       domProps: {
  // //         innerHTML: '<span><span>' + node.label + '</span></span><span style='float: right; margin-right: 20px'><button onClick=' ' type='button' class='el-button el-button--default el-button--mini'><span>Append</span></button><button onClick=' ' type='button' class='el-button el-button--default el-button--mini'><span>Delete</span></button></span>'
  // //       }
  // //     })
  // //   )
  // // },
  // // 树的分级加载，需要与lazy属性一起使用
  // loadNode (node, resolve) {
  //   if (node.level === 0) {
  //     return resolve([{ label: 'region1', children: [] }, { label: 'region2', children: [] }])
  //   }
  //   if (node.level > 3) return resolve([])

  //   var hasChild
  //   if (node.data.label === 'region1') {
  //     hasChild = true
  //   } else if (node.data.label === 'region2') {
  //     hasChild = false
  //   } else {
  //     hasChild = Math.random() > 0.5
  //   }
  //   setTimeout(() => {
  //     var data
  //     if (hasChild) {
  //       data = [{
  //         label: 'zone',
  //         children: []
  //       }, {
  //         label: 'zone'
  //       }]
  //     } else {
  //       data = []
  //     }
  //     resolve(data)
  //   }, 500)
  // },
  // handleCheckChange (data, checked, indeterminate) {
  //   console.log(data, checked, indeterminate)
  // },
  // handleNodeClick (data) {
  //   console.log(data)
  // },
  // handleDelete (index, row) {
  //   console.log(index, row)
  // },
//     doneTodosCount () {
//     return this.$store.getters.doneTodosCount
//   }
//   store.commit('increment', {
//   amount: 10
// })
  // 添加Tab页
  addTab ({ commit, state }, obj) {
    var isNewTab = true
    let tabs = state.editableTabs
    tabs.forEach((tab, index) => {
      if (tab.name === obj.row.DocCode) {
        isNewTab = false
      }
    })
    if (isNewTab) {
      commit(types.editableTabsAdd, {title: obj.row.DocName, name: obj.row.DocCode, content: 'tab' + obj.row.DocName + ':'})
    }
    debugger
    commit(types.setActiveName, obj.row.DocCode)
  },
  // 关闭Tab页
  removeTab ({ commit, state }, targetName) {
    let tabs = state.editableTabs
    let activeName = state.activeName
    debugger
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }
    commit(types.setActiveName, activeName)
    commit(types.editableTabsDelete, targetName)
  },
  tabChange ({ commit, state }, targetName) {
    commit(types.setActiveName, targetName)
  }
}
