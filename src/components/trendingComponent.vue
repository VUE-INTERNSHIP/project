<template>
  <div class="trending" ref="reff">
    <h2>trendings</h2>
    <div class="trending-img" ref="refs" >
      <div v-for="(img, x) in trendings" class="divv" :key="x">
        <div class="imgs">
          <img :src="img.thumbnail.trending" :alt="img.category">
        </div>
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
    this.trendings = this.trendings.filter(src => src.thumbnail.trending !== undefined)
    console.log(this.trendings[0].thumbnail.trending.large);
    let trending = this.$refs.reff        
		let slider = this.$refs.refs

		let pressed = false
		let startX;

		trending.addEventListener('mousedown', e => {
			pressed = true;
			startX = e.offsetX - slider.offsetLeft;
		})
		trending.addEventListener('mouseup',() => {
			pressed = false
		})

		const checkBoundary = () =>{
			let outer = trending.getBoundingClientRect()
			let inner = slider.getBoundingClientRect()

			if (parseInt(slider.style.left) > 0) {
				slider.style.left = '0px'
			}
			if (inner.right < outer.right) {
				slider.style.left = `-${inner.width - outer.width}px`
			}
		}
		trending.addEventListener('mousemove',(e) => {
			if(!pressed) return 
			e.preventDefault()
			slider.style.left = `${e.offsetX - startX}px`
			checkBoundary()
		})
    }
}

</script>

<style scoped>
.trending{
  position: relative;
  width: 100%;
  height: 250px;
  padding: 0;
  margin:0;
  background: yellow;
  overflow: hidden;
}
.trending h2{
  color:#fff;
  z-index: 10000;
  margin: 0;
  padding: 0;
}
.trending-img{
  width: 350%;
  /* margin-top: 40px; */
  /* background: green; */
  pointer-events: none;
	position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
}
  .divv {
    position: relative;
    width: 600px;
    height: 200px;
    background: red;
    margin-right: 10px;
    border-radius: 12px;
    overflow: hidden;
    z-index: 10000;
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
    height: 100%;
  }
</style> 