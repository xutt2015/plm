import * as types from './mutation-types'

export default {
  // idIncrement (state) {
  //   // 改变 state
  //   state.id++
  //   return state.id
  // },
  [types.editableTabsAdd] (state, value) {
    state.editableTabs.push(value)
  },
  [types.editableTabsDelete] (state, targetName) {
    debugger
    let tabs = state.editableTabs
    state.editableTabs = tabs.filter(tab => tab.name !== targetName)
  },
  [types.setActiveName] (state, newValue) {
    debugger
    state.activeName = newValue
  }
}
