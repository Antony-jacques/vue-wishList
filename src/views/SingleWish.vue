<template>
  <h1>SingleWish</h1>
  <h1>{{wish.title}}</h1>
</template>

<script>
import { useRoute } from 'vue-router'
import getSingleWish from '../composables/getSingleWish'

export default {
    setup(){
        const route = useRoute()
        console.log(route.params.id)
        const { test, load, wish, error } = getSingleWish(route.params.id)
        load()
        console.log(wish)

        return { test, load, wish, error }
    }

}
</script>

<style>

</style>