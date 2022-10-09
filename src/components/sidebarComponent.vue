<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/bookmarked">Bookmarked</router-link>
      {{name}}
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  mounted() {
    console.log(this.name);
  }
}
</script>

<style>

</style> 