<template>
  <form @submit.prevent="uyeOl">
<h4>Üye Olma Ekranı</h4>
<input type="text" placeholder="Kullanıcı adını giriniz" v-model="kullaniciAd"/>
<input type="text" placeholder="Email giriniz" v-model="email"/>
<input type="password" placeholder="Parola giriniz" v-model="parola"/>
<button>Üye Ol</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import useRegister from '../composables/useRegister'
export default {
    setup(){
        const kullaniciAd=ref('')
        const email=ref('')
        const parola=ref('')

        const {hata,signup}=useRegister()

        const uyeOl= async ()=>{
           // console.log(kullaniciAd.value,email.value,parola.value);
            await signup(email.value,parola.value,kullaniciAd.value);
        }

        return {kullaniciAd,email,parola,uyeOl}
    }
}
</script>

<style>

</style>