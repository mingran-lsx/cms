<template>
  <div class="page-modal">
    <el-dialog v-model="DialogVisible" title="新建用户" width="30%" center destroy-on-close>
      <SxForm v-bind="modalConfig" v-model="formData"></SxForm>
      <slot></slot>

      <template #footer>
      <span class="dialog-footer">
        <el-button @click="DialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm"
        >确定</el-button
        >
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import SxForm from "@/base-ui/form/index";
import {onMounted, ref, watch} from "vue";
import {useStore} from "vuex";

const DialogVisible =ref(false);
const props = defineProps({
  modalConfig: {
    type: Object,
    default: () => ({}),
    required: true
  },
  defaultFormInfo: {
    type: Object,
    default: () => ({}),
    required: true
  },
  PageName: {
    type: String,
    default: () => '',
    required: true
  },
  otherInfo: {
    type: Object,
    default: () => ({}),
  }
})
const formData = ref<any>({});

watch(() =>
        props.defaultFormInfo
    ,       (newValue) => {
      for (const item of props.modalConfig.formItems) {
        formData.value[`${item.field}`] = newValue[`${item.field}`]
      }
    },)


defineExpose({
  DialogVisible,
})
const store =useStore()
const handleConfirm = () => {
  DialogVisible.value = false
  //区分新增和修改
  if(Object.keys(props.defaultFormInfo).length > 0){
  //编辑
    store.dispatch("system/editPageAction",{
      pageName: props.PageName,
      data: {...formData.value,...props.otherInfo,},
      id: props.defaultFormInfo.id,

    })
  }else{
  //新增
    store.dispatch("system/createPageAction",{
      pageName: props.PageName,
      data: {...formData.value,...props.otherInfo,},
    })
  }
}
</script>

<style scoped lang="less">
.page-modal {

}
</style>