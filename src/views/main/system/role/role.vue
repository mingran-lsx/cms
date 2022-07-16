<template>
  <div class="role">
    <page-search :formConfig="formConfig" @emitSearch="emitSearch" @emitReset="emitReset"></page-search>
<!--    <PageContent :tableConfig="tableConfig" PageName="role" @handleAdd="handleAdd"-->
<!--                 @handleEdit="handleEdit"></PageContent>-->
<!--    <PageModal :defaultFormInfo="defaultFormInfo" :otherInfo="otherInfo" :modalConfig="modalConfig" ref="PageModalRef" PageName="role">-->
<!--    </PageModal>-->
    <page-content :tableConfig="tableConfig" PageName="role" ref="PageContentRef" @handleAdd="handleAdd" @handleEdit="handleEdit" ></page-content>
    <div class="page-modal">
      <page-modal :defaultFormInfo="defaultFormInfo" :otherInfo="otherInfo" :modalConfig="modalConfigRef" ref="PageModalRef" PageName="role">
        <el-tree
            :data="menuList"
            show-checkbox
            ref="elTreeRef"
            node-key="id"
            @check="handleCheckChange"
            :props="{
                      children: 'children',
                      label: 'name',
                    }"
        />
      </page-modal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {formConfig} from "@/views/main/system/role/config/search-config"
import PageSearch from "@/components/page-search/index";
import tableConfig from "@/views/main/system/role/config/content-config";
import PageContent from "@/components/page-content/index";
import {usePageSearch} from "@/hooks/use-page-search";
const {emitSearch, emitReset,PageContentRef} = usePageSearch();

import PageModal from "@/components/page-modal/index";
import modalConfig from "./config/modal-config";
import {computed, ref} from "vue";
// const modalConfigRef = ref<InstanceType<typeof PageModal>>();
const otherInfo =ref({})
const modalConfigRef = ref(modalConfig);
import {usePageModal} from "@/hooks/use-page-modal";
import {useStore} from "vuex";
import {menuMapLeafKeys} from "@/utils/map-menu";
import {ElTree} from "element-plus";
const store = useStore();
const elTreeRef = ref<InstanceType<typeof ElTree>>()
let menuList =  computed(()=>{
  return store.state.entireMenus
})
const handleCheckChange = (data1:any,data2:any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}


const handleAddCb = () => {
}
const handleEditCb = (data:any) => {
  const leafKeys = menuMapLeafKeys(data.menuList)
  // nextTick(() => {
  //   console.log(elTreeRef.value)
  //   console.log(leafKeys)
  //
  // })
  const setTree =  setInterval(() => {
    leafKeys.forEach(key => {
      elTreeRef.value?.setChecked(key, true, true)
    })
    clearInterval(setTree)
  },100)}
const {PageModalRef, handleAdd, handleEdit,defaultFormInfo} = usePageModal(handleAddCb, handleEditCb);
</script>

<style scoped></style>
