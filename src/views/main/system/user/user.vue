<template>
  <div class="users">
    <page-search :formConfig="formConfig" @emitSearch="emitSearch" @emitReset="emitReset"></page-search>
   <page-content :tableConfig="tableConfig" PageName="users" ref="PageContentRef" @handleAdd="handleAdd" @handleEdit="handleEdit" ></page-content>
   <div class="page-modal">
     <page-modal :defaultFormInfo="defaultFormInfo" :modalConfig="modalConfigRef" ref="PageModalRef" PageName="users"></page-modal>
   </div>
  </div>
</template>

<script lang="ts" setup>
import {formConfig} from "./config/search-config"
import PageSearch from "@/components/page-search/index";
import tableConfig from "@/views/main/system/user/config/content-config";
import PageContent from "@/components/page-content/index";
import {usePageSearch} from "@/hooks/use-page-search";
import {computed, ref} from "vue";
const {emitSearch, emitReset,PageContentRef} = usePageSearch();
import PageModal from "@/components/page-modal/index";
import modalConfig from "./config/modal-config";
import {useStore} from "vuex";

// const modalConfigRef = ref(modalConfig);
import {usePageModal} from "@/hooks/use-page-modal";
const handleAddCb = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = false
  // console.log(modalConfig.formItems);
}
const handleEditCb = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = true
  // console.log(modalConfig.formItems);
}
const {PageModalRef, defaultFormInfo, handleEdit, handleAdd,} = usePageModal(handleAddCb, handleEditCb);




const store =useStore();
//响应式数据
const modalConfigRef = computed(() => {
  //与数据依赖的 响应式数据
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === 'departmentId'
  )
  departmentItem!.options = store.state.entireDepartments.map(
    (item:any) => ({
      title: item.name,
      value: item.id
    })
  )
  const roleItem = modalConfig.formItems.find(
    (item) => item.field === 'roleId'
  )
  roleItem!.options = store.state.entireRoles.map(
    (item:any) => ({
      title: item.name,
      value: item.id
    })
  )
  return modalConfig;
})
</script>

<style scoped>
.users {
}
</style>
