<template>
  <div class="sidebar">
   <div id="sideb">
         <div id="logo"><img src="../assets/logo.svg" alt="" id="logoimage" class="icon" ></div>
         <div id="menu"   ><router-link to="/"><img src="../assets/icon-nav-home.svg" alt="" class="icon" ></router-link></div>
         <div id="icon3" ><router-link to="/moviesview"><img src="../assets/icon-nav-movies.svg" class="icon" alt="" ></router-link></div>
         <div id="icon4"  ><router-link to="/seriesview"><img src="../assets/icon-nav-tv-series.svg"  alt="" class="icon" ></router-link></div>
         <div id="icon5"  ><router-link to="/bookmarked"><img src="../assets/icon-nav-bookmark.svg" alt="" class="icon" ></router-link></div>
     <div id="avatar"><img src="../assets/image-avatar.png" alt="" ></div>
   </div>
  </div>
</template>
 
<script>
export default {
 data() {
  return {
    isActive1: false,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    notActive: false,
  }
 },
}
</script>
 
<style scoped>
*{
  padding: 0;
  margin: 0;
}
.iconcolor{
  filter: invert(40%) sepia(37%) saturate(419%) hue-rotate(184deg) brightness(93%) contrast(89%);
}
.icon:hover{
  filter: invert(89%) sepia(100%) saturate(2%) hue-rotate(282deg) brightness(109%) contrast(101%);
}
a.router-link-exact-active{
   filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
}
.icon{
  filter: invert(40%) sepia(37%) saturate(419%) hue-rotate(184deg) brightness(93%) contrast(89%);
  width: 20px;
  height: 20px;
}
@media screen and (max-width: 480px){
  .icon{
    width: 20px;
    height: 20px;
    margin-right: 20px;
    filter: invert(40%) sepia(37%) saturate(419%) hue-rotate(184deg) brightness(93%) contrast(89%);
    /* margin-top: 15px; */
  }
  #icon5{
    margin-right: 10%;
  }
  #avatar{
    width: 20px;
    height: 20px;
    /* margin-top: 10px; */
    margin-left: 65%;
    position: relative;
  }
  #sideb{
    /* display: flex;
    flex-direction: row; */
    display: grid;
    grid-template-columns: 3fr 1.5fr 1.5fr 1.5fr 1.5fr 3fr;
    background-color: var(--semiDarkBlue);
    position:relative;
    height: inherit;
    width: inherit;
    padding-top: 15px;
    padding-right: 0px;
  }
  .sidebar{
    height: 50px;
    width: 100%;
  }
  #logo{
    margin-left: 10px;
    /* margin-bottom: 15px; */
    margin-right: 40%;
    /* margin-top: 15px; */
    filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
    width: 20px;
    height: 20px;
  }
}
@media screen and (min-width: 480px) and (max-width: 768px){
  .icon{
    width: 20px;
    height: 20px;
    margin-right: 10px;
    filter: invert(40%) sepia(37%) saturate(419%) hue-rotate(184deg) brightness(93%) contrast(89%);
    /* margin-top: 15px; */
  }
  #avatar{
    width: 20px;
    height: 20px;
    /* margin-top: 10px; */
    margin-left: 77%;
    position: relative;
  }
  #icon5{
    margin-right: 10%;
  }
  #sideb{
    /* display: flex;
    flex-direction: row; */
    display: grid;
    grid-template-columns: 3.6fr 1.2fr 1.2fr 1.2fr 1.2fr 3.6fr;
    background-color: var(--semiDarkBlue);
    position:relative;
    height: inherit;
    width: inherit;
    padding-top: 15px;
    padding-right: 0px;
    border-radius: inherit;
  }
  .sidebar{
    margin: auto;
    height: 50px;
    width: 100%;
    /* border-radius: 15px; */
  }
  #logo{
    margin-left: 10px;
    /* margin-bottom: 15px; */
    margin-right: 30%;
    /* margin-top: 15px; */
    filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
    width: 20px;
    height: 20px;
  }
}
@media screen and (min-width: 768px){
  .element {
  all: none;
}
.icon{
    width: 20px;
    height: 20px;
    /* margin-right: 20px; */
    filter: invert(40%) sepia(37%) saturate(419%) hue-rotate(184deg) brightness(93%) contrast(89%);
    /* margin-top: 15px; */
    margin: 10px auto 5px;
  }
  #avatar{
    width: 20px;
    height: 20px;
    /* margin-top: 10px; */
    /* margin-left: 77%; */
    position: relative;
    margin: auto;
    margin-bottom: 10px;
  }
  #icon5{
    margin-right: 10%;
    margin-bottom: 65%;
  }
  #sideb{
    /* display: flex;
    flex-direction: row; */
    display: grid;
    grid-template-rows: 4fr 1fr 1fr 1fr 1fr 4fr;
    background-color: var(--semiDarkBlue);
    position:relative;
    height: inherit;
    width: inherit;
    /* padding-left: 15px; */
    padding-top: 10px;
    border-radius: inherit;
  }
  .sidebar{
    margin: auto;
    height: 50px;
    width: 500px;
    border-radius: 15px;
  }
  #logo{
    /* margin-left: 10px; */
    /* margin-bottom: 15px; */
    margin-bottom: 75%;
    /* margin-top: 15px; */
    filter: invert(60%) sepia(90%) saturate(5299%) hue-rotate(335deg) brightness(105%) contrast(107%);
    width: 20px;
    height: 20px;
    margin: auto;
    margin-top: 10%;
  }
}
</style>
