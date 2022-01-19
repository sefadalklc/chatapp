<template>
  <div class="home container">
    <h2>Chat App</h2>
    <Register />
  </div>
</template>

<script>
import Register from '../components/Register.vue'

export default {
  name: 'Home',
  components:{
    Register
  }
}
</script>

<style scoped>
.home{
  text-align: left;
  padding: 20px 50px;
}
</style>
