<template>
    <el-row :gutter='20'>
      <el-col :span='6'>
        <el-input
          placeholder='请输入零件关键字查找'
          icon='search'
          v-model='partKey'
          :on-icon-click='partSearch'>
        </el-input>
        <el-input style='margin-top: 5px;'
          placeholder='请输入零件关键字查找'
          icon='search'
          v-model='DocKey'
          :on-icon-click='DocSearch'>
        </el-input>
        <el-tree  id='DocLibTree' :data='treeData'  :props='defaultProps' :load='loadNode' check-strictly show-checkbox  default-expand-all node-key='id' :expand-on-click-node='false' :render-content='renderContent'  @check-change='handleCheckChange' @node-click='handleNodeClick'></el-tree>
      </el-col>
      <el-col :span='18'>
      <el-tabs v-model='activeName' @tab-remove='removeTab'  @tab-click='tabChange'>
        <el-tab-pane label='产品' name='product'> 
          <el-table :data='tableData' border style='width: 100%' :default-sort='{prop:"validTime", order:"descending"}'>
            <el-table-column type='index' width='80' label='序号'></el-table-column>
            <el-table-column prop='DocName' label='零部件名称' sortable width='200'>
            </el-table-column>
            <el-table-column prop='operateCol' label='操作列' width='140'>
              <template scope='scope'>
                <i class='el-icon-arrow-up' @click='handleView(scope.$index, scope.row)'></i>
                <i class='el-icon-arrow-down' @click='handleView(scope.$index, scope.row)'></i>
                <i class='el-icon-plus' @click='handleView(scope.$index, scope.row)'></i>
                <i class='el-icon-delete' @click='handleView(scope.$index, scope.row)'></i>
              </template>
            </el-table-column>
            <el-table-column prop='DocCode' label='零部件编号' sortable width='180'>
            </el-table-column>
            <el-table-column prop='num' label='数量' sortable width='100'>
            </el-table-column>
            <el-table-column prop='validStatus' label='生效状态' sortable width='120'>
            </el-table-column>
            <el-table-column prop='validTime' label='生效时间' sortable width='120'>
            </el-table-column>
            <el-table-column prop='creator' label='创建人' sortable width='120'>
            </el-table-column>
            <el-table-column prop='view' label='查看' width='100'>
              <template scope='scope'>
                <i class='el-icon-view' @click='addTab(activeName,scope.$index, scope.row)'></i>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label='文档清单' name='DocList'>文档清单</el-tab-pane>
        <el-tab-pane label='零件信息' name='DocInfo'>零件信息</el-tab-pane>
        <el-tab-pane v-for='(item, index) in editableTabs' closable :label='item.title' :name='item.name' >
          <template scope='scope'>
            {{item.content}}
            <i class='el-icon-view'></i>
          </template>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'DocLib',
  data () {
    return {
      partKey: '',
      DocKey: '',
      // treeData
      id: 9,
      treeData: [{id: 1,
        label: '产品库',
        children: [{
          id: '1 - 1',
          label: '2011',
          children: [{
            id: '1 - 1 - 1',
            label: '商用车',
            children: [{
              id: '1 - 1 - 1 - 1',
              label: '车型1',
              children: [{
                id: '1 - 1 - 1 - 1 - 1',
                label: '发动机'
              }]
            }]
          }, {
            id: '1 - 1 - 2',
            label: '乘用车'
          }]
        }, {
          id: '1 - 2',
          label: '2012'
        }, {
          id: '1 - 3',
          label: '2013'
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {// 用vue管理的数据
    activeName () {
      return this.$store.state.DocLib.activeName
    },
    editableTabs () {
      return this.$store.state.DocLib.editableTabs
    },
    tableData () {
      return this.$store.state.DocLib.tableData
    }
  },
  methods: {
    partSearch (e) {
      var value = e.target.nextSibling.value
      alert(value)
    },
    DocSearch (e) {
      var value = e.target.nextSibling.value
      alert(value)
    },
    // treeData
    renderContent (h, { node, data, store }) {
      // //设置是否为叶子节点，默认全不是,分级加载使用
      // if (node.isleaf=='true') {
      //       node.isLeaf=true;
      // }
      // jsx形式 实现模板的渲染
      return (
        <span>
          <span>
            <span>{node.label}</span>
          </span>
          <span style='float: right; margin-right: 20px'>
            <el-button size='mini' on-click={ () => this.append(store, data) }>Append</el-button>
            <el-button size='mini' on-click={ () => this.remove(store, data) }>Delete</el-button>
          </span>
        </span>)
    },
    // 添加
    append (store, data) {
      store.append({ id: this.id++, label: 'testtest', children: [] }, data)
    },
    // 删除
    remove (store, data) {
      store.remove(data)
    },
    // renderContent (h, { node, data, store }) {
    //   // //设置是否为叶子节点，默认全不是
    //   // if (node.isleaf=='true') {
    //   //       node.isLeaf=true;
    //   // }
    //   return (
    //     h('span', {
    //       domProps: {
    //         innerHTML: '<span><span>' + node.label + '</span></span><span style='float: right; margin-right: 20px'><button onClick=' ' type='button' class='el-button el-button--default el-button--mini'><span>Append</span></button><button onClick=' ' type='button' class='el-button el-button--default el-button--mini'><span>Delete</span></button></span>'
    //       }
    //     })
    //   )
    // },
    // 树的分级加载，需要与lazy属性一起使用
    loadNode (node, resolve) {
      if (node.level === 0) {
        return resolve([{ label: 'region1', children: [] }, { label: 'region2', children: [] }])
      }
      if (node.level > 3) return resolve([])

      var hasChild
      if (node.data.label === 'region1') {
        hasChild = true
      } else if (node.data.label === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }
      setTimeout(() => {
        var data
        if (hasChild) {
          data = [{
            label: 'zone',
            children: []
          }, {
            label: 'zone'
          }]
        } else {
          data = []
        }
        resolve(data)
      }, 500)
    },
    handleCheckChange (data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    handleNodeClick (data) {
      console.log(data)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    // tab操作，触发action实现
    addTab (targetName, index, row) {
      this.$store.dispatch('addTab', {'targetName': targetName, 'index': index, 'row': row})
    },
    removeTab (targetName) {
      this.$store.dispatch('removeTab', targetName)
    },
    tabChange (tab, event) { // activeName只能通过mutation更改所以需要在切换时手动更改
      this.$store.dispatch('tabChange', tab.name)
    },
    handleView (index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style type='text/css'>
#DocLibTree{
  margin-top: 5px;
}
</style>

