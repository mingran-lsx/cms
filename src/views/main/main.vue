<template>
  <div class="main">
    <el-container class="main-content">
      <!--   -->
      <el-aside class="main-aside" :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <!--   -->
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <!--  -->
        <el-main class="page-content">
         <div class="page-info">
           <router-view />
         </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from '@/components/nav-menu/index'
import NavHeader from '@/components/nav-header/index'
import {ref} from "vue";
const isCollapse = ref(false)
const handleFoldChange = function (isFold:boolean) {
  isCollapse.value = isFold
  console.log(isFold)
}
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
  background-color: #f5f5f5;

  .page-info {
    text-align: center;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>