<template>
  <div class="page-content">
    <SxTable :tableData="tableData"
             v-bind="tableConfig"
             v-model:pagination="pagination"
             :totalCount="totalCount">
      <template #header>
      </template>
      <template #headerHandle="scope">
        <div class="header-handle">
          <el-button  v-if="isCreate" plain size="small" type="primary" @click="handleAdd(scope.row)">
            <el-icon>
              <Plus/>
            </el-icon>
            新增用户
          </el-button>
          <!--            刷新用户-->
          <el-button plain size="small" type="primary" @click="handleRefreshUser(scope.row)">
            <el-icon>
              <Refresh/>
            </el-icon>
            刷新用户
          </el-button>
        </div>
      </template>
      <template #enable="scope">
       <el-button :type="scope.row.enable?'success':'danger'" plain>{{ scope.row.enable?"启用":'禁止' }}</el-button>
      </template>
      <template #createAt="scope">
        <div>
          {{$filter.formatDate(scope.row.createAt, 'yyyy-MM-dd HH:mm:ss')}}
        </div>
      </template>
      <template #updateAt="scope">
        <div>
          {{$filter.formatDate(scope.row.updateAt, 'yyyy-MM-dd HH:mm:ss')}}
        </div>
      </template>
      <template #handle="scope">
        <div class="edit-btn" >
          <el-button v-if="isUpdate" plain size="small" type="primary" @click="handleEdit(scope.row)">
            <el-icon>
              <Edit/>
            </el-icon>
            编辑
          </el-button>
          <el-button v-if="isDelete" plain size="small" type="primary" @click="handleDelete(scope.row)">
            <el-icon>
              <Delete/>
            </el-icon>
            删除
          </el-button>
        </div>
      </template>
      <template #footer="scope">
      </template>

      <template v-for="item in otherSlotName" :key="item.label" #[item.slotName]="scope">
        <template v-if="item.slotName" >
          <slot :name="item.slotName" :row="scope.row">
            {{scope.row[item.prop]}}
          </slot>
        </template>
      </template>
    </SxTable>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref, watch} from "vue";
import {useStore} from "vuex";
import  SxTable from "@/base-ui/table/index";
import {Plus, Refresh,Delete  ,Edit} from "@element-plus/icons-vue";
import {firstUpperCase} from "@/utils/firstUpperCase";
import tabelConfig from "@/views/main/product/goods/config/content-config";
import {usePermission} from "@/hooks/use-permission";
const store =useStore()

const props = defineProps({
  tableConfig: {
    type: Object,
    default: () => {}
  },
  PageName: {
    type: String,
    default: "",
    required: true
  },
})
//获取表格数据
const pagination = ref({
  currentPage: 0,
  pageSize: 10,
})
watch(pagination, (val) => { //!每次切换页码时，更新数据
  getPageList()
})
const pageName = props.PageName;
const getPageList = (query:any={}) => {
  // console.log(query, "query")
  // console.log(pageName, "pageName")
  store.dispatch(`system/getPageList`,{
    pageUrl: `/${pageName}/list`,
    pageName: pageName,
    queryInfo: {
      offset: (pagination.value.currentPage ) * pagination.value.pageSize,
      size: pagination.value.pageSize,
      ...query
    }
  })
};
getPageList();
const tableData = computed(() => store.state.system[`${pageName}List`])
const totalCount = computed(() => store.state.system[`${pageName}TotalCount`])
const handleAdd=(data:any)=>{
  emit("handleAdd",data)
}
const handleRefreshUser=(row:any)=>{
  emit("handleRefreshUser",row)
}
const handleEdit=(row:any)=>{
  emit("handleEdit",row)
}
const handleDelete=(row:any)=>{
  store.dispatch(`system/deletePageAction`,{
    pageName: props.PageName,
   id: row.id
  })
}
const emit =defineEmits([
  "handleAdd",
  "handleRefreshUser",
  "handleEdit",
  "handleDelete",
])
//跨组件插槽
const otherSlotName = props.tableConfig.propList.filter((item:any) => {
  if (item.slotName==="headerHandle") return false
  if (item.slotName==="enable") return false
  if (item.slotName==="createAt") return false
  if (item.slotName==="updateAt") return false
  if (item.slotName==="handle") return false
  if (item.slotName==="name") return false
  return true
})

//按钮权限 usePermission

const isCreate = usePermission(props.PageName, 'create');
const isUpdate = usePermission(props.PageName, 'update');
const isDelete = usePermission(props.PageName, 'delete');
const isQuery = usePermission(props.PageName, 'query');

const buttonPermission = computed(() => {
  // return store.state.system.buttonPermission
})
defineExpose({
  getPageList,
})
</script>

<style scoped lang="less">
.page-content {

}
</style>