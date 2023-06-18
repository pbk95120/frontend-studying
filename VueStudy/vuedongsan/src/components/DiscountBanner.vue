/
<template>
  <div class="discount">
    <h4>지금 결제하면 {{ num }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "DiscountBanner",
  data() {
    return {
      num: 20,
    };
  },
  mounted() {
    const interval = setInterval(() => {
      this.num--;
      if (this.num === 0) {
        clearInterval(interval);
      }
    }, 1000);
  },
};
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
