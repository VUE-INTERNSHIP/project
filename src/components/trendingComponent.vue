<template>
  <div class="trending">
    <h2>trendings</h2>
    <div v-for="(imgs, x) in trendings" class="divv" :key="x" >
      <div class="imgs">
        <img :src="imgs.thumbnail.trending.large" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  data(){
    return{
      trendings: this.data
    }
  },
  mounted() {
    console.log(this.trendings)
    this.trendings = this.trendings.filter(src => src.thumbnail.trending !== undefined)
    console.log(this.trendings);
    // this.trendings = x
  }
}
</script>

<style scoped>
.trending{
  position: relative;
  width: 100%;
  height: 4rem;
  padding: 0;
}
.divv{
  width: 100%;
  height: 100%;
  background: green;
  position: relative;
  display: flex;
  flex-direction: row;
}
  .divv .imgs{
    /* display: flex; */
    width: 200px;
    background: red;
    margin-bottom: 10px;
    height: 100px;
  }
</style> 