<template>
  <div class="greetings">
    <p class="text">{{ msg }}</p>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style lang="less" scoped>
.text {
  font-size: 30px;
  padding: 25px 15px;
  line-height: 1.3;
}
</style>
