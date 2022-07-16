<template>
  <div class="nav-header">
<div class="header-icon">
  <el-icon :size="30" @click="foldClick">
    <component v-if ="!isFold" :is="Expand" />
    <component v-else :is="Fold" />
  </el-icon>
</div>
    <div class="header-content">
      <div class="header-breadcrumb">
        <SxBreadcrumb :breadcrumb="breadcrumb"></SxBreadcrumb>
      </div>
      <div>用户信息</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Expand,Fold} from "@element-plus/icons-vue";
import {computed, ref} from "vue";
import {defineProps,defineEmits} from 'vue'
const isFold = ref(false)
import SxBreadcrumb from "@/base-ui/breadcrumb/index";
import {useRoute} from "vue-router";
import {getBreadcrumbs} from "@/utils/map-menu";
import {useStore} from "vuex";
const emit = defineEmits(['foldChange'])

const foldClick= () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
const breadcrumb = computed(() => {
  const router = useRoute()
  const store = useStore()
  const menus = store.state.login.menus
  return getBreadcrumbs(menus,router.path)
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
 display: flex;
  .header-content{
    display:flex ;
    flex:1;
    justify-content: space-between;
    align-items: center;
  }
}
.header-breadcrumb{
  margin-left: 10px;
}
</style>