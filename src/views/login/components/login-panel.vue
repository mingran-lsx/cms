<template>
  <div class="login-panel">
    <h1 class="login-title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>账号登录</span>
        </span>
        </template>
        <LoginAccount ref="accountRef"/>
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>手机登录</span>
        </span>
        </template>
        <LoginPhone ref="phoneRef"/>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword" > <el-link  :underline="false" type="primary">记住密码</el-link></el-checkbox>
      <el-link type="primary"  :underline="false">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import {Calendar} from '@element-plus/icons-vue'
import LoginAccount from "@/views/login/components/login-account.vue";
import LoginPhone from "@/views/login/components/login-phone.vue";
import {ref} from "vue";
const isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof LoginAccount>>();//注册对元素或子组件的引用。
const phoneRef = ref<InstanceType<typeof LoginPhone>>();//注册对元素或子组件的引用。
const handleLoginClick = function() {
  accountRef.value?.loginAction()
}

</script>

<style scoped lang="less" >
.login-panel {
  text-align: center;
  width: 320px;
}
.account-control {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.login-btn {
  margin-top: 10px;
  width: 100%;
}

</style>