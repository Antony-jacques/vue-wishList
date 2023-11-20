<template>
  <div class="conrainer">
    <p>{{ error }}</p>

    <div v-for="wish in wishList" :key="wish.title">
      <WishCard :wish="wish" />
    </div>
  </div>
</template>

<script>
import getWishes from '../composables/getWishes'
import WishCard from './WishCard.vue'

export default {
  components: { WishCard },
  setup() {
    const { wishList, error, load } = getWishes()

    load()

    return { wishList, error }
  }
}
</script>

<style>
</style>