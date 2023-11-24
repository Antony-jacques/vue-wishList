<template>
  <div class="card">
    <div class="card-header">
      <img :src="wish.image" alt="" />
    </div>
    <div class="card-content">
      <div class="card-title">
        <h3>{{ wish.title }}</h3>
      </div>
      <div class="card-price">
        <h3>{{ wish.price }} €</h3>
      </div>
      <div>
        <div @click="toggleDescription" class="description-header">
          Plus d'infos
        </div>
        <div class="card-description" v-show="showDescription">
          {{ wish.description }}
        </div>
      </div>
    </div>
    <div>
    </div>
    <div>
      <button><a target="blank" :href="wish.link">Acheter</a></button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: ['wish'],
  setup(props) {
    const showDescription = ref(false)
    const toggleDescription = () => {
      showDescription.value = !showDescription.value
    }

    return { showDescription, toggleDescription }
  }
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 1rem auto;
  text-align: center;
  font-family: arial;
}

.card-header img {
  max-width: 100%;
}

.card .card-content {
}

.card .card-title,
.card-price {
  margin: 1rem 0;
  font-weight: bold;
}

.card-title {
  font-weight: 500;
  text-transform: uppercase;
  padding: 1rem;
}

.card-price {
  border-top: 1px solid #eee;
  padding: 1rem;
}

.card-title,
.card-price,
.card-description,
.description-header {
  padding: 1rem;
}

.description-header {
  background-color: #eee;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button a {
  font-weight: bold;
  color: white;
}

.card button:hover {
  opacity: 0.7;
}
</style>
