<script setup>
import { ref } from 'vue'
import img from '@/assets/2.png'
import { useRouter } from 'vue-router'
const router = useRouter()
const visible = ref(true)
const arr = ref([
  {
    title: '商品标题',
    price: 100,
    image: './assets/1.jpg',
    desc: '描述信息'
  },
  {
    title: '商品标题',
    price: 100,
    image: '@/assets/2.jpg',
    desc: '描述信息'
  },
  {
    title: '商品标题',
    price: 100,
    image: '@/assets/3.jpg',
    desc: '描述信息'
  },
  {
    title: '商品标题',
    price: 100,
    image: '@/assets/4.jpg',
    desc: '描述信息'
  },
  {
    title: '商品标题',
    price: 100,
    image: '@/assets/5.jpg',
    desc: '描述信息'
  }
])
const toitem = () => {
  router.push('/item')
}
</script>
<template>
  <van-tag type="primary">新品</van-tag>
  <van-tag type="danger" @click="change">热卖</van-tag>
  <transition name="van-slide-up" v-for="item in arr" :key="item.index">
    <van-card
      tag="新品"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="img"
      @click="toitem"
      @click-thumb="toitem"
      v-show="visible"
    />
  </transition>
</template>
