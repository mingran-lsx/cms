<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo">
      <span  class="title">VUE+TS</span>
    </div>

    <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical"
        :collapse="props.collapse"
        background-color="#0c2135"
        text-color="#b7bdc3"
        active-text-color="#0a60bd"
    >
      <template v-for="menuItem in menus" :key="menuItem.id">
        <!--        //index 可以是任意值，只要不重复即可-->
        <el-sub-menu :index="menuItem.id+''">
          <template slot="title" #title>
            <el-icon>
              <!--              <location />-->
              <component :is="Setting" />
            </el-icon>
            <span>{{ menuItem.name }}</span>
          </template>
          <template v-for="menuItemChildren in menuItem.children" :key="menuItemChildren.id">
            <el-menu-item :index="menuItemChildren.id+''" @click="handleMenuItemClick(menuItemChildren)">
              <span>{{ menuItemChildren.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {Location, Setting} from '@element-plus/icons-vue'
import {useStore} from "@/store";
import {defineProps, onMounted, ref} from 'vue'
import router from "@/router";
import {useRoute} from "vue-router";
import {pathMapToMenus} from "@/utils/map-menu";

const store = useStore()
const route = useRoute()
const menus = store.state.login.menus
const props = defineProps(['collapse'])
onMounted(() => {
  console.log(props.collapse)
})

const handleMenuItemClick = (menuItem:any) => {
  console.log(menuItem)
  router.push(menuItem.url ?? "404")
}

const defaultActive =ref('0')
const path = route.path
const menu = pathMapToMenus( menus, path)
defaultActive.value = menu.id+''
</script>

<style scoped lang="less">

.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>