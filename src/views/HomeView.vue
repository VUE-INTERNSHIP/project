<template>
  <div class="container">
    <div class="sidebar">
      <sidebar-component/>
    </div>
    <div class="main">
      <search-component/>
      <trending-component/>
      <recomended-component/>
    </div>
  </div>
</template>

<script>
import sidebarComponent from '../components/sidebarComponent.vue'
import searchComponent from '../components/searchComponent.vue'
import trendingComponent from '../components/trendingComponent.vue'
import recomendedComponent from '../components/recomendedComponent.vue'
export default {
  components: {
    sidebarComponent,
    searchComponent,
    trendingComponent,
    recomendedComponent,
  }

}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100vh;
}
.sidebar{
  background-color: red;
  color: white;
}
.main{
  background-color: black;
  color: white;
}
</style>