<template>
  <div class="card">
    <div class="card-header">
      <img :src="wish.image" alt="" />
    </div>
    <div class="card-content">
      <div class="card-title">
        <h3>{{ wish.title }}</h3>
      </div>
      <div>
        {{ wish.description }}
      </div>
      <div class="card-price">
        <h3>{{ wish.price }}</h3>
      </div>
    </div>
    <div>
      <router-link :to="{ name: 'singleWish', params: { id: wish.id } }">
        Detail du souhait
      </router-link>
    </div>
    <div>
      <button><a target="blank" :href="wish.link">link to wish</a></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['wish'],
  setup(props) {
    return {}
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
  padding: 0 3rem;
}

.card .card-title,
.card-price {
  margin: 2rem auto;
  font-weight: bold;
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
