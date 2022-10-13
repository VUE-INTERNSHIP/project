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
</style>>
