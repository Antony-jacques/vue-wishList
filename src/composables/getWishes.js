import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getWishes = () => {

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

    return { wishList, error, load }
}

export default getWishes