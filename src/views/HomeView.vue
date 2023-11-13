<template>
  <h1>HomeView</h1>
  <WishList :fakeData="fakeData" />
</template>

<script>
import WishList from '../components/WishList.vue'
export default {
  setup() {
    const fakeData = [
      {
        title: 'toy',
        price: 20,
        description:
          '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eveniet, consectetur dolorum nesciunt minus eos amet, ipsum alias sit iusto, aliquid id veniam molestias sint ea sed quam sapiente voluptate maxime pariatur quas deserunt molestiae. Sint, quam. Quas, repellat! Natus harum voluptatum sequi qui ullam, sit omnis nemo maiores eveniet!'
      },
      {
        title: 'clothes',
        price: 50,
        description:
          '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eveniet, consectetur dolorum nesciunt minus eos amet, ipsum alias sit iusto, aliquid id veniam molestias sint ea sed quam sapiente voluptate maxime pariatur quas deserunt molestiae. Sint, quam. Quas, repellat! Natus harum voluptatum sequi qui ullam, sit omnis nemo maiores eveniet!'
      }
    ]

    return { fakeData }
  },
  components: { WishList }
}
</script>

<style>
</style>