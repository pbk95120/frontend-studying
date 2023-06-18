/
<template>
  <div class="black-bg" v-if="modalOn === true">
    <div class="white-bg">
      <h4>{{ onerooms[clickNum].title }}</h4>
      <p>{{ onerooms[clickNum].content }}</p>
      <input v-model.number="month" />
      <p>{{ month }}개월 가격 : {{ onerooms[clickNum].price * month }} 원</p>
      <button @click="$emit('closeModal', i)">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneRoomModal",
  data() {
    return {
      month: 1,
    };
  },
  watch: {
    month(month) {
      if (month > 13) {
        alert("12이하를 입력 해주세요.");
      }
      if (isNaN(month)) {
        alert("숫자를 입력 해주세요.");
        this.month = 1;
      }
    },
  },
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
