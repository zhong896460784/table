<script setup>
import { ref } from 'vue'
import img from '@/assets/2.png'
const caji = ref(['实木茶几', '玻璃茶几', '金属茶几', '石材茶几', '板式茶几'])
</script>
<template>
  <van-space direction="vertical" fill>
    <div>
      <h3>茶几</h3>
      <van-grid :column-num="3" icon-size="50px">
        <van-grid-item
          v-for="(value, index) in caji"
          :key="value"
          :icon="img"
          :text="caji[index]"
        />
      </van-grid>
      <h3>餐桌</h3>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
      <h3>沙发</h3>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
      <h3>沙发</h3>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div>
  </van-space>
</template>
