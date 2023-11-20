import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getSingleWish = (id) => {
  const test = 'test string'
  const wish = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('wishList').doc(id).get()
      wish.value = { ...res.data(), id: res.id }
    } catch (err) {
      error.value = err.message
    }
  }

  return { test, load, wish, error }
}

export default getSingleWish
