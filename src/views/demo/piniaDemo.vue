<template>
  <div class="about">
    <p>这是一个pinia的计数器demo：</p>
    <p>计数器值：{{ counter.count }}</p>

    <van-button type="primary" @click="counter.increment">点击增加计数器值</van-button>
    <van-button type="success" @click="counter.doubleCount">计数器值翻倍</van-button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@stores/counter'

const counter = useCounterStore()
</script>

<style lang="less" scoped>
.about {
  font-size: 20px;
  padding: 25px 15px;
  line-height: 1.3;
}
button {
  font-size: 12px;
  margin: 10px;
}
</style>
