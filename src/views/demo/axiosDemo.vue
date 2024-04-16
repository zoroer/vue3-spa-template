<template>
  <div class="greetings">
    <p>通过axios发起异步请求，结果为：</p>
    <section class="text" v-for="(item, index) in reqData" :key="index">
      {{ item.name }}
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { test } from '@api/test'

const reqData = ref([])

test()
  .then((data) => {
    reqData.value = data
  })
  .catch((err) => {
    console.log(err)
  })
</script>

<style lang="less" scoped>
.greetings {
  font-size: 20px;
  padding: 25px 15px;
  line-height: 1.3;
  .text {
    font-size: 14px;
    text-decoration: underline;
  }
}
</style>
