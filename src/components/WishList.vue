<template>
  <div>
    <p>{{ error }}</p>

    <div class="wishItem" v-for="item in wishList" :key="item.title">
        <router-link :to="{ name: 'singleWish', params: { id: item.id } }">
      <div class="item-title">
        <h3>{{ item.title }}</h3>
      </div>
      <div>
        {{ item.description }}
      </div>
      <div>
        {{ item.price }}
      </div>
    </router-link>
    </div>
  </div>
</template>

<script>

import getWishes from '../composables/getWishes'

export default {
  setup() {

    const { wishList, error, load } = getWishes()

    load()

    return { wishList, error }
  }
}
</script>

<style>
</style>