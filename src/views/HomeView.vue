<template>
  <div class="home">
    <div class="container">
   <Sidebar/>
   <Navbar/>
   <Recommend/>
   <Main/> 
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src

import Sidebar from '@/components/Sidebar.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Main  
  },
};
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
</style>
