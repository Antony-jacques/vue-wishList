import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { useRouter } from 'vue-router'

export function addWish(param)  {
  const router = useRouter()

   const handleSubmit = async (param) => {


    try {
      const res = await projectFirestore.collection('wishList').add(param)
    } catch (error) {
      console.log(error)
    }
    router.push({ name: 'home' })
  }
  return { param, handleSubmit }
}
