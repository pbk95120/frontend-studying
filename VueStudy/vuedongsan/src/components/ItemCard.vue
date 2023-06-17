/
<template>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
  <div v-for="(oneroom, i) in onerooms" :key="i">
    <img :src="oneroom.image" class="room-img" @click="$emit('openModal', i)" />
    <h4 @click="$emit('openModal', i)">
      {{ oneroom.title }}
    </h4>
    <p>{{ oneroom.content }}</p>
    <p>{{ oneroom.price }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    onerooms: Array,
  },
};
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 10px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  object-fit: cover;
  margin-top: 40px;
  width: 500px;
}
</style>
