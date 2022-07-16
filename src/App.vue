<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>
<script lang="ts" setup>
import {onMounted} from "vue";
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

onMounted(() => {
  // 初始化页面数据
  // initPageData();
  // console.log($filter.formData)
});


</script>
<style lang="less">
.app {
  width: 100%;
  height: 100%;
}
</style>
