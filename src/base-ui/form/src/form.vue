<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="props.labelWidth">
      <el-row :gutter="10">
       <template v-for="item in props.formItems" :key="item.label">
         <el-col v-bind="props.colLayout">
         <el-form-item :label="item.label" :style="props.itemLayout" v-if="!item.isHidden">
          <template v-if="item.type==='input'||item.type==='password'" >
            <el-input  :model-value="modelValue[`${item.field}`]" @update:modelValue="handleValueChange($event,item.field)" :placeholder="item.placeholder"></el-input>
           </template>
           <template v-if="item.type==='select'">
             <el-select  :model-value="modelValue[`${item.field}`]" @update:modelValue="handleValueChange($event,item.field)" placeholder="请选择"  v-bind="item.otherOptions"  style="width: 100%">
               <el-option v-for="(option, index) in item.options" :key="index" :label="option.label" :value="option.value">
                 {{option.title}}
               </el-option>
             </el-select>
           </template>
           <template v-if="item.type==='datepicker'">
             <el-date-picker  :model-value="modelValue[`${item.field}`]" @update:modelValue="handleValueChange($event,item.field)"  v-bind="item.otherOptions" style="width: 100%"></el-date-picker>
           </template>
         </el-form-item>
         </el-col>
       </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
      </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, onMounted, PropType, ref, watch} from "vue";
import {IFormItem} from "@/base-ui/form";
import {useStore} from "vuex";
import {useRouter} from "vue-router";


const props =defineProps({
  formItems: {
    type: Array as PropType <IFormItem[]>,
     default: () => []
  }
  ,
  labelWidth: {
    type: String as PropType <string>,
    default: '80px'
  }
  ,
  itemLayout: {
    type: Object as PropType <object>,
    default: () => ({
      padding: '10px 40px'
    })
  }
  ,
  colLayout: {
    type:Object as PropType <object>,
    default: () => ({
      xl:6,
      lg:8,
      md:12,
      sm:24,
      xs:24
    })
  },
  modelValue: {
    type: Object as PropType <object>,
    required: true,
  },

})
//
// const formData = ref({...props.modelValue})
//
// watch(()=>{
//   return props.modelValue
// },(val)=>{
//     formData.value = {...val}
// })


// watch(formData, (val) => {
//   emit("update:modelValue", val)
// },{
//   deep: true
// })
const emit =defineEmits(["update:modelValue"]);

const handleValueChange = (value:any, field:string) => {
  emit("update:modelValue", {
    ...props.modelValue,//原来的值
    [field]: value//更新modelValue
  })
}
</script>

<style scoped lang="less">
.form {
padding-top: 20px;
  background-color: #fff;
}
.footer{
  display: flex;
  justify-content: flex-end;
  padding: 10px 40px;
}
</style>