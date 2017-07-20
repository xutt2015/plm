<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-menu :default-active="activeIndex" class="el-menu-tab" mode="horizontal" @select="handleSelect">
      <li class="logo"><img src="./assets/logo.png"></li>
      <el-menu-item index="home">首页</el-menu-item>
      <el-submenu index="personalArea">
        <template slot="title">我的工作台</template>
        <el-menu-item index="DocManage">文档管理</el-menu-item>
        <el-menu-item index="partManage">零件管理</el-menu-item>
      </el-submenu>
      <el-menu-item index="productlib">产品库</el-menu-item>
      <el-menu-item index="Doclib">文档库</el-menu-item>
      <el-menu-item index="test">测试界面</el-menu-item>
      <el-menu-item index="signIn" class="floatRight">登录</el-menu-item>
      <el-submenu index="PersonalSetting" class="floatRight">
        <template slot="title"><i class="el-icon-setting"></i>设置中心</template>
        <el-menu-item index="PersonalInfo">个人信息</el-menu-item>
        <el-menu-item index="modifyPassword">修改密码</el-menu-item>
      </el-submenu>
      <el-menu-item index="currentUser" class="floatRight">管理员</el-menu-item>
    </el-menu>
    <transition :name="transitionName">
        <router-view class="content"></router-view>
    </transition>
  </div>
</template> 

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: 'home',
      transitionName: 'slide-left'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      var href
      switch (key) {
        case 'home' :
          href = '#/'
          break
        case 'DocManage' :
          href = '#/404'
          break
        case 'partManage' :
          href = '#/404'
          break
        case 'productlib' :
          href = '#/productLib'
          break
        case 'Doclib' :
          href = '#/DocLib'
          break
        case 'test' :
          href = '#/test/1'
          break
        default:
          href = '#/404'
          break
      }
      location.href = href
    }
  },
  watch: {
    '$route' (to, from) {
      debugger
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  .el-menu-tab{
    position: fixed !important;;
    left: 0;
    top:0;
    right:0;
    z-index: 10;
  }
  .content{
    margin-top: 65px;
  }
  .floatRight{
    float: right !important;
  }
  .logo{
    float: left;
    margin-top: 10px;
    margin-left: 10px;
  }
  [class^=el-icon-] {
    color: #20a0ff !important;
  }
  /*transition 效果
  .content {
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }*/
</style>
