<template>
  <div>
     <h1>ID:{{ $route.params.id }}</h1>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
    </ul>
    <a href="#/">返回主界面</a>
    <router-view></router-view>
  </div>
</template>

<script>
// import unfound from './404.vue'
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
