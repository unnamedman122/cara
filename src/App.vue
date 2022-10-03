<template>
  <div class="app">
    <my-nav-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavBar from './components/MyNavBar.vue'
export default {
  name:"App",
  components: { MyNavBar },
}
</script>


<style src="./assets/styles/reset.css"></style>
<style src="./assets/styles/style.css"></style>