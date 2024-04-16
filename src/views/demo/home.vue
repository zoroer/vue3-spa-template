<template>
  <van-notice-bar
    left-icon="volume-o"
    text="uni-web-cli 脚手架支持的多种项目模板，包括：h5模板，admin管理后台模板，node-web模板，小程序模板"
  />

  <div class="wrapper">
    <HelloWorld msg="基于Vue3全家桶、Vite构建的开箱即用移动端项目基础模板" />

    <van-cell-group inset>
      <van-cell
        v-for="(tips, index) in tipsList"
        :key="index"
        :title="tips.title"
        :to="tips.routerPath"
        :is-link="tips.routerPath !== ''"
      />
    </van-cell-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tipsList = ref([
  {
    title: '✅ Vue3 + Vite4',
    routerPath: ''
  },
  {
    title: '✅ Vant4 组件库动态引入',
    routerPath: ''
  },
  {
    title: '✅ Pinia 状态管理',
    routerPath: '/piniaDemo'
  },
  {
    title: '✅ Axios 统一请求封装',
    routerPath: '/axiosDemo'
  },
  {
    title: '✅ Vue-router4 业务路由懒加载',
    routerPath: ''
  },
  {
    title: '✅ REM 移动端适配',
    routerPath: ''
  },
  {
    title: '✅ ESLint 统一代码格式校验',
    routerPath: ''
  },
  {
    title: '✅ VConsole 开发环境调试',
    routerPath: ''
  }
])
</script>

<style lang="less" scoped></style>
