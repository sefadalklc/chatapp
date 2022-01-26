<template>
  <div class="chat-window">
      <div v-if="hata">{{hata}}</div>
      <div v-if="belgeler" class="messages">
          <div v-for="belge in belgeler" :key="belge.id" class="single">
              <span class="created-at">{{belge.olusturulmaTarihi.toDate()}}</span>
              <span class="name">{{belge.kullanici}}</span>
              <span style="text-decoration:none">{{belge.mesaj}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import getCollection from'../composables/getCollection';
export default {
    setup(){
        const {hata,belgeler}=getCollection('mesajlar');

        return {hata,belgeler}
    }
}
</script>

<style>

</style>