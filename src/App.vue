<template>
  <div id="app">
    <div class="side_bar" v-if="this.$route.name !== 'login' && this.$route.name !== 'signup'">
      <sidebar-component id="side"/>
    </div>
    <div class="routes">
      <router-view/>
    </div>
  </div>
  <!-- <div>
    <div v-for="done in dones" :key="done.id" >
      <p @click="chnId(done.id)">{{done.name}} {{done.done}}</p>
    </div>
    <div>
      <h4>Dned..</h4>
      <div v-for="(dn, x) in donn" :key="x">
        <h2>{{dn.name}}</h2>
       </div>
    </div>
  </div> -->
</template>
 
<script>
  import HomePage from './views/HomeView.vue';
  import SidebarComponent from './components/sidebarComponent.vue';

  export default {
    components: {
    HomePage,
    SidebarComponent
}, 
    
    beforeCreate() {
      this.$store.commit('loadStore');
	  },
    created() {
      this.$store.commit('nameScs');
      
    },
   
    methods: {
     
    }
  }
   
</script>

<style>
/* p{
  cursor: pointer;
  background: #FC4747;
  padding: 12px;
} */
*{
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background: #10141E;
  width: 100%;
  min-height: 100vh;
  --red: #FC4747;
  --darkBlue: #10141E;
  --grayishBlue: #5A698F;
  --semiDarkBlue: #161D2F;
  --white: #FFFFFF;
}
/* Main App Styling by DeadEazy */



/* .icon:active{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
} */

@media screen and (min-width: 768px) {
#app{
  display: grid;
  grid-template-columns: 80px 1fr;
}

 #side{
  height: inherit;
  width: 60px;
  background-color: var(--semiDarkBlue);
  border-radius: 15px;
  position: sticky;
  margin: 0 auto;
  top: 0;
}
#side .remove-side{
  display:none;
}
.side_bar{
  margin: 0;
  padding: 0;
  position: sticky;
  top:0;
  height: 95vh;
  margin-top: 15px;
}

}
</style>
