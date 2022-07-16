<template>
  <div class="goods">
    <page-search :formConfig="formConfig" @emitSearch="emitSearch" @emitReset="emitReset"></page-search>
    <page-content :tableConfig="tableConfig" PageName="goods" ref="PageContentRef">
      <template #imgUrl="scope">
        <el-image
            style="width: 50px; height: 50px"
            :src="scope.row.imgUrl"
            :preview-src-list="[scope.row.imgUrl]"
            fit="cover"
        />
      </template>
    </page-content>
  </div>
</template>

<script lang="ts" setup>
import {formConfig} from "@/views/main/product/goods/config/search-config"
import PageSearch from "@/components/page-search/index";
import tableConfig from "@/views/main/product/goods/config/content-config";
import PageContent from "@/components/page-content/index";
import {usePageSearch} from "@/hooks/use-page-search";
const {emitSearch, emitReset,PageContentRef} = usePageSearch();
</script>

<style scoped></style>
