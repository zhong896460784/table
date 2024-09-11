<script setup>
import { ref } from 'vue'
const active = ref()
</script>
<template>
  <van-nav-bar title="厂家名">
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <RouterView></RouterView>
  <div style="height: 3rem">
    <van-tabbar v-model="active" active-color="#ee0a24">
      <van-tabbar-item icon="home-o" to="index">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="category">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
