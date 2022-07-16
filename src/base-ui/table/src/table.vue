<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{title}}</div>
        <div class="header-handle">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="tableData" style="width: 100%" border v-bind="childrenProps">
      <el-table-column v-if="isShowSelect" type="selection" align="center"  width="60"></el-table-column>
      <el-table-column v-if="isShowIndex" type="index" align="center" label="序号" width="80"></el-table-column>
      <template v-for="propItem in propList" :key="propItem.label">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{scope.row[propItem.prop]}}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="isShowFooter">
      <slot name="footer">
        <el-pagination
            v-model:currentPage="props.pagination.currentPage"
            v-model:page-size="props.pagination.pageSize"
            :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="props.totalCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {PropType,defineEmits} from "vue";

const props = defineProps({
  tableData: {
    type: Array as PropType <any[]>,
    default: () => [],
    required: true
  },
  propList: {
    type: Array as PropType <any[]>,
    default: () => [],
    required: true
  },
  isShowIndex: {
    type: Boolean,
    default: true,
  },
  isShowSelect: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
  },
  pagination: {
    type: Object as PropType <object>,
    default: () => ({
      currentPage: 0,
      pageSize: 10
    })
  },
  isShowFooter: {
    type: Boolean,
    default: true,
  },
  totalCount: {
    type: Number,
    default: 0,
  },
  childrenProps: {
    type:Object,
    default: () => ({}),
  },
});
const emit = defineEmits([
  "update:pagination",
]);
const handleCurrentChange = (currentPage: number) => {
  console.log(currentPage);
  emit("update:pagination", {
    currentPage,
    ...props.pagination
  });
};
const handleSizeChange = (pageSize: number) => {
  emit("update:pagination", {
    pageSize,
    ...props.pagination
  });
};
</script>

<style scoped lang="less">

.table {
  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;


    .title {
      font-size: 20px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }

  .footer {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    .el-pagination {
      text-align: right;
    }
  }
}
</style>