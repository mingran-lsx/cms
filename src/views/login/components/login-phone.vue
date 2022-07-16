<template>
  <div class="login-phone">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="70px"
        class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model.number="ruleForm.account"  type="text "/>
      </el-form-item>

      <el-form-item label="验证码" prop="code">
       <div class="code">
         <el-input v-model="ruleForm.code" type="text" autocomplete="off" />
         <ElButton type="primary"  @click="getCode" class="codeBtn">获取验证码</ElButton>
       </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {FormInstance} from "element-plus";
import {reactive, ref} from "vue";

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  code: '',
  phone: '',
});
const rules = reactive({
  code: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
    },
    {
      min: 6,
      max: 20,
      message: "密码长度在 6 到 20 个字符",
      trigger: "blur",
    },
  ],
  phone: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur",
    },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: "请输入正确的手机号",
      trigger: "blur",
    },
  ],
});
const getCode = () => {
  console.log("获取验证码");
};


</script>

<style scoped lang="less">
.login-phone {

}
.code{
  display: flex;
  justify-content: space-between;
  .codeBtn{
    margin-left: 10px;
  }
}

</style>