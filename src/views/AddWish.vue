<template>
  <h1>Addwish</h1>
  <form @submit.prevent="handleSubmit(newWish)">
    <div>
      <p><label for="">Title</label></p>
      <input type="text" v-model="title" />
    </div>
    <div>
      <p><label for="">Description</label></p>
      <textarea v-model="description" rows="4" cols="50"></textarea>
    </div>
    <div>
      <p><label for="">Price</label></p>
      <input v-model="price" type="number" min="0" />
    </div>
    <div>
      <p><label for="">Link</label></p>
      <input v-model="link" type="text" />
    </div>
    <div>
      <p><label for="">Image url</label></p>
      <input v-model="imageUrl" type="text" />
    </div>
    <div><button>Submit</button></div>
  </form>
</template>

<script>
import { reactive, ref } from 'vue'
import { addWish } from '../composables/addWish'

export default {
  setup() {
    const title = ref('')
    const price = ref(0)
    const description = ref('')
    const link = ref('')
    const imageUrl = ref('')

    const newWish = reactive({
      title,
      price,
      description,
      link,
      imageUrl
    })

    const { handleSubmit } = addWish(newWish)

    return { title, price, newWish, description, link, imageUrl, handleSubmit }
  }
}
</script>

<style></style>
