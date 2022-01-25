<template>
  <form >
      <input placeholder="Mesajınızı yazın ve enter'a basın"
      v-model="mesaj"
      @keypress.enter.prevent="gonder" />
  </form>
</template>

<script>
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import {tarih} from '../firebase/config'
import {ref} from 'vue'

export default {
    setup(){
        const {kullanici} =getUser();

        const mesaj=ref('');

        const{belgeEkle,hata}=useCollection('mesajlar')

        const gonder =async()=>{
            const chat ={
                kullanici:kullanici.value.displayName,
                mesaj:mesaj.value,
                olusturulmaTarihi:tarih()
            }
            await belgeEkle(chat);
            //console.log(chat);
            if(!hata.value){
                mesaj.value=''
            }else{
                mesaj.value=hata.value
            }
        }
        return {mesaj,gonder}
    }
}
</script>

<style scoped>

form {
    width: 600px;
    margin: 30px auto;
    text-align: center;
}

input{
    width: 100%;
    max-width: 100%;
    margin-bottom: 5px;
    padding: 10px;
    
}

</style>