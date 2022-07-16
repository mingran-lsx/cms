<template>
  <div class="login-panel">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="60px"
        class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model.number="ruleForm.account"  type="text "/>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import {useStore} from 'vuex'
const ruleFormRef = ref<FormInstance>()
import store from '@/store'

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if(value.length < 6) {
    callback(new Error('密码长度不能小于6位'))
  } else {
    callback()
  }
}
const validateAccount = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入账号'))
  } else if (value.length < 5) {
    callback(new Error("账号长度不能小于5位"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  account: '',
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' },
    {required: true, message: '请输入密码', trigger: 'blur'}],
  account: [{ validator: validateAccount, trigger: 'blur' },
    {required: true, message: '请输入账号', trigger: 'blur'}],
})

const loginAction = () => {
  ruleFormRef.value?.validate((valid: boolean) => {
    if (valid) {//  如果校验通过
      console.log('success')
      store.dispatch("login/accountLoginAction",{
        name: ruleForm.account,
        password: ruleForm.pass
      })
    } else {
      console.log('error')
    }
  })
}
defineExpose({
  loginAction,

})

</script>

<style scoped lang="less">
.login-panel {
  .el-input {
    width: 220px;
  }
}

</style>