<template>
   <!-- I made this component to call Navbar, recommend, trending and section as the right side of the project. --> 
  <div class="main">
    <Navbar/>
    <Trending/>
    <Recommend/>
    <Section/>
  </div> 

</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Trending from '@/components/Trending.vue'
  import Recommend from '@/components/Recommend.vue'
  import Section from '@/components/Section.vue'
export default {
 components:{
  Navbar,
  Trending,
  Recommend,
  Section
 }
}
</script>

<style scoped>
.main{
display:grid;
gap: 20px;
position:absolute;
width:calc(100% - 100px);
left:100px;
min-height:100vh;

}

</style>

