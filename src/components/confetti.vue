<!--
 * @Author: wupf wupf@bjhzwq.com
 * @Date: 2024-09-04 16:57:25
 * @LastEditors: wupf wupf@bjhzwq.com
 * @LastEditTime: 2024-09-04 17:41:21
 * @FilePath: src/components/confetti.vue
 * @Description: 五彩纸屑组件
 -->
<script setup>
import confetti from 'canvas-confetti'

/* 纸屑 */
confetti({
  particleCount: 100,
  spread: 170,
  origin: { y: 0.6 },
})
</script>

<template></template>
