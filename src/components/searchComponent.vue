<template>
  <div class="searchcomp">
    <img src="../assets/icon-search.svg" alt=""><input type="search" placeholder="Search for movies or TV series here">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
  --red: #FC4747;
  --darkBlue: #10141E;
  --grayishBlue: #5A698F;
  --semiDarkBlue: #161D2F;
  --white: #FFFFFF;
}

@media screen and (min-width: 0px) and (max-width: 1000px){
.searchcomp{
  width: 100%;
  display: flex;
  background-color: var(--darkBlue);
  height: 50px;
  margin: auto auto;
}
input{
  width: inherit;
  border: none;
  background-color: var(--darkBlue);
  height: inherit;
  color: var(--white);
  outline: none;
}
img{
  width: 20px;
  height: 20px;
  margin: auto 10px;
  border: none;
}
}
@media screen and (min-width: 1000px){
  .searchcomp{
  width: 90%;
  display: flex;
  background-color: var(--darkBlue);
  height: 50px;
  margin: auto auto;
}
input{
  width: inherit;
  border: none;
  background-color: var(--darkBlue);
  height: inherit;
  color: var(--white);
  outline: none;

}
img{
  width: 20px;
  height: 20px;
  margin: auto 10px;
  border: none;
}
}
</style> 