<template>
  <h1>Addwish</h1>
  <form @submit.prevent="handleSubmit">
    <div>
      <p><label for="">Title</label></p>
      <input type="text" v-model="title" />
      <p>{{ title }}</p>
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
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const title = ref('')
    const price = ref(0)
    const description = ref('')
    const link = ref('')
    const imageUrl = ref('')

    const handleSubmit = async () => {
      const newWish = {
        title: title.value,
        price: price.value,
        description: description.value,
        link: link.value,
        image: imageUrl.value
      }

      try {
        const res = await projectFirestore.collection('wishList').add(newWish)
      } catch (error) {
        console.log(error)
      }
      router.push({ name: 'home' })
    }

    return { title, price, description, link, imageUrl, handleSubmit }
  }
}
</script>

<style></style>
