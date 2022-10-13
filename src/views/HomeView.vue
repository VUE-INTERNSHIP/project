<template>
  <div class="container">
    <div class="main">
      <trending-component :data="movies"/>
      <recomended-component :data="movies"/>
    </div>
  </div>
</template>

<script>
//  import Movies from '../datas/movies.js';
import trendingComponent from '../components/trendingComponent.vue'
import recomendedComponent from '../components/recomendedComponent.vue'
export default {
  components: {
    trendingComponent,
    recomendedComponent,
  },
  props:{
    movies: Array
  },
  data() {
    return{
      data: Movies
    }
  },
  // props: {
  //   movie: Array
  // },
  // mounted() {
  //   console.log(this.movie)
  // }

}
</script>

<style scoped>
.main{
  background-color: #10141E;
}
@media screen and (min-width: 1000px){
  .main{
    float: right;
  width: 92%;
  }
}
</style>