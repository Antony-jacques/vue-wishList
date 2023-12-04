<template>
  <div class="home-header">
    <div class="title">
      <h2>Ma liste au Père Noel</h2>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home-header {
  display: flex;
  height: 75vh;
  background: url('../assets/christmas6.webp');
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center center;
  position: relative;
}

.home-header::after {
  background: url('../assets/snow.webp') 100% 100%;
  /* background: red; */
  height: 147px;
  position: absolute;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
}

.title {
  margin: auto;
  transform: translateY(-100%);
  background: white;
  padding: 1rem;
  border-radius: 50px;
}
</style>
