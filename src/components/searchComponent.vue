<template>

  <div class="input">
    <label>
      <input type="search" placeholder="Search for movies or TV series here" />
    </label>
</div>
 
</template>

<script>
export default {

}
</script>

<style scoped>

  .input{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .input input{
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    padding: 12px 4em;
    background-image: url('../assets/icon-search.svg');
    background-position-y: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }
  input::placeholder{
    /* color: #fff */
  }

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

