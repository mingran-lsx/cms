<template>
  <div class="page-search">
    <SxForm v-bind="formConfig" v-model="formData">
      <template #header>
        <div>高级检索</div>
      </template>
      <template #footer>
        <div class="search-btn">
          <el-button type="primary" @click="search">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </template>
    </SxForm>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, PropType, ref, watch} from "vue";
import {IForm} from "@/base-ui/form";
import SxForm from "@/base-ui/form/index";
const props = defineProps({
  formConfig: {
    type: Object as PropType <IForm>,
    default: () => ({}),
    required: true
  }
});
const emit= defineEmits([
  'emitSearch',
  'emitReset'
])
const formItems= props.formConfig.formItems;
const formOriginalData:any={};
for(const item of formItems){
  // console.log(item.field)
  formOriginalData[item.field]='';
}

const formData =ref(formOriginalData);
const search = () => {
  console.log(formData.value)
  emit('emitSearch', formData.value)
}
const reset = () => {
  formData.value = formOriginalData;
  emit('emitReset')
}
</script>

<style scoped lang="less">
.page-search {

}
</style>