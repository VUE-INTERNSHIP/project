<template>
  <div class="box">
    <div class="container">
     Sidebar
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box{
 width:100%;
 position:relative;
}

.container{
    width: 100px;
    grid-column: 1;
    grid-row: 2 / 5;
    display:grid;
    min-height:100vh;
    border: 2px solid black;
    position:fixed;
    overflow:hidden;
}
</style>

