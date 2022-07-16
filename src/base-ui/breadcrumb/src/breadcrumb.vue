<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
    <template v-for="item in breadcrumb" :key="item.name">
      <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
    </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
const props = defineProps({
  breadcrumb: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped lang="less">
.breadcrumb {
}
</style>