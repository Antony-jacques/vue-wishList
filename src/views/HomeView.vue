<template>
  <div class="container">
    <HomeHeader />
    <WishList />

  </div>
</template>

<script>
import WishList from '../components/WishList.vue'
import HomeHeader from '../components/HomeHeader.vue'

export default {
  setup() {
    return {}
  },
  components: { WishList, HomeHeader }
}
</script>

<style>
  .container {
    width: 100%
  }
</style>
