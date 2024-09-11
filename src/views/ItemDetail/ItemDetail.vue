<script setup>
import { ref } from 'vue'
const show = ref(false)
const index = ref(0)
const images = ['https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg']
const onChange = (newIndex) => {
  index.value = newIndex
}
const showimg = () => {
  show.value = !show.value
}
</script>
<template>
  <div @click="showimage">商品图片预览(点击可以放大)</div>
  <van-image
    fit="contain"
    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    @click="showimg"
  />
  <van-image-preview v-model:show="show" :images="images" @change="onChange">
    <template v-slot:index>第{{ index + 1 }}页</template>
  </van-image-preview>
</template>
