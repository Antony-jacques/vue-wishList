import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { useRouter } from 'vue-router'

const addWish = () => {
  const router = useRouter()

  const title = ref('')
  const price = ref(0)
  const description = ref('')
  const link = ref('')
  const imageUrl = ref('')

  const handleSubmit = async () => {
    alert('test')
    const newWish = {
      title: title.value,
      price: price.value,
      description: description.value,
      link: link.value,
      image: imageUrl.value
    }

    console.log('newWish', newWish)

    try {
      const res = await projectFirestore.collection('wishList').add(newWish)
    } catch (error) {
      console.log(error)
    }
    router.push({ name: 'home' })
  }
  return { handleSubmit }
}
export default addWish
