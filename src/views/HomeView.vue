<template>
  <h1>HomeView</h1>
  <WishList :fakeData="fakeData"/>
</template>

<script>
import WishList from '../components/WishList.vue';
export default {
  setup() {
    const fakeData = [
      { 
        title: 'toy',
        price: 20
      },
      { 
        title: 'clothes',
        price: 50
      },
    ]

    return { fakeData }

  },
  components: { WishList,  }
}
</script>

<style>

</style>