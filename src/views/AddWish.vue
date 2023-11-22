<template>
  <h1>Addwish</h1>
  <form @submit.prevent="handleSubmit">
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
import addWish from '../composables/addWish'

export default {
  setup() {
    const { handleSubmit } = addWish()

    return { handleSubmit }
  }
}
</script>

<style></style>
