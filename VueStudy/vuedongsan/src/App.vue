<template>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
  <DiscountBanner />
  <button @click="basicsort()">기본순</button>
  <button @click="pricesort()">가격순</button>
  <Transition name="fade">
    <OneRoomModal
      @closeModal="modalOn = false"
      :onerooms="onerooms"
      :clickNum="clickNum"
      :modalOn="modalOn"
    />
  </Transition>
  <ItemCard
    @openModal="
      modalOn = true;
      clickNum = $event;
    "
    :onerooms="onerooms"
    :clickNum="clickNum"
    :modalOn="modalOn"
  />
  <!-- <div v-for="(a, i) in products" :key="i">
    <img :src="require('./assets/room' + i + '.jpg')" class="room-img" />
    <h4 @click="modalOn = true">{{ products[i] }}</h4>
    <p>{{ prices[i] }}</p>
    <button @click="increase(i)">허위매물신고</button>
    <div>신고수 : {{ report[i] }}</div>
  </div> -->
</template>

<script>
import data from "./data.js";
import DiscountBanner from "./components/DiscountBanner.vue";
import OneRoomModal from "./components/OneRoomModal.vue";
import ItemCard from "./components/ItemCard.vue";

export default {
  name: "App",
  data() {
    return {
      clickNum: 0,
      oneroomsOrigin: [...data],
      onerooms: [...data],
      menus: ["Home", "Shop", "About"],
      prices: [60, 70, 80],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      report: [0, 0, 0],
      modalOn: false,
    };
  },
  methods: {
    increase(num) {
      this.report[num] += 1;
    },
    basicsort() {
      this.onerooms = [...this.oneroomsOrigin];
    },
    pricesort() {
      this.onerooms.sort((a, b) => {
        return a.price - b.price;
      });
    },
  },
  components: {
    DiscountBanner,
    ItemCard,
    OneRoomModal,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
