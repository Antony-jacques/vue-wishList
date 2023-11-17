<template>
  <div>
    <p>{{ error }}</p>

    <div class="wishItem" v-for="item in wishList" :key="item.title">
      <div class="item-title">
        <h3>{{ item.title }}</h3>
      </div>
      <div>
        {{ item.description }}
      </div>
      <div>
        {{ item.price }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

export default {
  setup() {
    const wishList = ref([])

    const error = ref(null)

    const load = async () => {
      try {
        const res = await projectFirestore.collection('wishList').get()

        if (!res.docs.length) {
          throw Error('Please, make a wish !')
        }

        wishList.value = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
      } catch (err) {
        error.value = err.message
      }
    }

    load()

    return { wishList, error }
  }
}
</script>

<style>
</style>