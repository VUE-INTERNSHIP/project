<template>
  <div id="app">
    <div>
      <sidebar-component name="Abubakar Adamu" />
      <search-component />
    </div>
    <router-view :movies="movies" />
  </div>
</template>

<script>
  import HomePage from './views/HomeView.vue';
  import Movies from './datas/movies.js';
  import SearchComponent from './components/searchComponent.vue';
  import SidebarComponent from './components/sidebarComponent.vue';

  export default {
    components: {
    Movies,
    HomePage,
    SearchComponent,
    SidebarComponent
},
    data() {
      return{
        movies: Movies
      }
    },
    mounted() {
      console.log(this.movies);
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #10141E;
  width: 100%;
  min-height: 100vh;
}

</style>
