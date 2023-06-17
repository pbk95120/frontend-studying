/
<template>
  <div class="black-bg" v-if="modalOn === true">
    <div class="white-bg">
      <h4>{{ onerooms[clickNum].title }}</h4>
      <p>{{ onerooms[clickNum].content }}</p>
      <p>{{ onerooms[clickNum].price }}</p>
      <button @click="$emit('closeModal', i)">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneRoomModal",
  props: {
    onerooms: Array,
    modalOn: Boolean,
    clickNum: Number,
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
