<template>
  <div class="home container">
    <h2>Chat App</h2>
    <div v-if="uyeMi">
      <Login />
      <p>Üye Olmak için <span @click="uyeMi=false" >Üye Ol</span> sayfasına gidiniz</p>
    </div>
    <div v-else>
      <Register />
      <p>Griş Yapmak İçin <span @click="uyeMi=true" >Giriş</span> sayfasına gidiniz</p>
    </div>
  </div>
</template>

<script>
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import {ref} from 'vue'


export default {
  name: 'Home',
  components:{
    Login,
    Register
  },
  
  setup(){
    const uyeMi=ref(true)
    return{uyeMi}
  }
}
</script>

<style scoped>
.home{
  text-align: left;
  padding: 20px 50px;
}
</style>
