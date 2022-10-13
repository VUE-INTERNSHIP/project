<template>
  <div class="trending" ref="reff"
   @mousedown="mouseDown" @mouseup="mouseUp" @mousemove="mouseMove">
    <h3>Trendings</h3>
    <div class="trending-img" ref="refs" >
      <div v-for="(img, x) in trendings" class="divv" :key="x">
        <div class="imgs">
          <img :src="img.thumbnail.trending.large" :alt="img.category">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    let pressed = false
		let start;
    let slider;
    let trending;
		
export default {
  props: {
    data: Array
  },
  data(){
    return{
      trendings: this.data,

    }
  },
  
    mounted() {
      this.trendings = this.trendings.filter(src => src.thumbnail.trending !== undefined)    
    },

    methods:{
     mouseDown(e) {
		  slider = this.$refs.refs
      // alert('Hello World')
      pressed = true;
			start = e.offsetX - slider.offsetLeft;
    },
    mouseUp(e){
      pressed = false
    },
    mouseMove(e){
		  slider = this.$refs.refs
      if(!pressed) return 
			e.preventDefault()
			slider.style.left = `${e.offsetX - start}px`
			this.checkBoundary()
    },
     checkBoundary(){
      trending = this.$refs.reff        
		  slider = this.$refs.refs
			let outer = trending.getBoundingClientRect()
			let inner = slider.getBoundingClientRect()
      // console.log(inner);

			if (parseInt(slider.style.left) > 0) {
				slider.style.left = '0px'
			}
			if (inner.right < outer.right) {
				slider.style.left = `-${inner.width - outer.width}px`
			}
		}
  },
}

</script>

<style scoped>
.trending{
  position: relative;
  width: 100%;
  height: 250px;
  padding: 0;
  margin:0;
  overflow: hidden;
  text-align: left;
  padding-left: 12px;
}
.trending h3{
  color:#fff;
  z-index: 10000;
  margin: 0;
  padding: 0;
  letter-spacing: 1px;
}
.trending-img{
  width: 350%;
  pointer-events: none;
	position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  padding-left: 12px;
}
  .divv {
    position: relative;
    width: 600px;
    height: 200px;
    margin-right: 10px;
    border-radius: 12px;
    overflow: hidden;
    /* z-index: 10000; */
  }
  .imgs{
    width: 100%;
    height: 100%;
  }
  .imgs img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    object-fit: fill;
  }
  @media screen and (min-width: 768px) {
    .trending-img{
      width: 350%;
    }
    .divv{
      width: 800px;
    }
  }
  @media screen and (min-width: 1000px) {
    .trending-img{
      width: 200%;
    }
    .divv{
      width: 600px;
    }
  }
</style> 