<template>
  <div id="app">
    <div id="major">
      <sidebar-component id="side" />
      <search-component id="search" />
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
  min-height: 100%;
  --red: #FC4747;
  --darkBlue: #10141E;
  --grayishBlue: #5A698F;
  --semiDarkBlue: #161D2F;
  --white: #FFFFFF;
}
.icon:active{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
}
@media screen and (min-width: 1000px) {
  .element {
  all: none;
}
  #logo{
  filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
  margin: 10px auto 100px ;
  /* margin-bottom: 70px; */
}
#menu{
  filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
  margin: 30px auto 0px ;
  /* margin-bottom: 70px; */
}
#icon3{
  margin: 30px auto 0px ;
}
#icon4{
  margin: 30px auto 0px ;
}
#icon5{
  margin: 30px auto 40px ;
}
img{
  width: 20px;
  display: block;
}
#spare{
  height: 15px;
  margin: 50px auto 10px;
}
#avatar{
  margin: 80px auto 20px;
}
#sideb{
  display: flex;
  flex-direction: column;
  /* height:100%; */
  /* margin-top: 20px; */
  /* border-radius: 15px; */
  background-color: var(--semiDarkBlue);
  /* float: left; */
  height: inherit;
  overflow: hidden;
  width: inherit;
  margin-top: 0;
  position: absolute;
  border-radius: inherit;
  
}
 #side{
  float: left;
  height: 500px;
  margin-top: 15px;
  width: 60px;
  /* padding-top: 50px; */
  background-color: var(--semiDarkBlue);
  border-radius: 15px;
  margin-left: 15px;
}
.sidebar{
  background-color: var(--white)
}
}
</style>
