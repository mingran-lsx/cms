<template>
  <div class="menu">
    <!--    <PageSearch :formConfig="formConfig"></PageSearch>-->
    <PageContent :tableConfig="tableConfig" PageName="menu"></PageContent>
  </div>
</template>

<script lang="ts" setup>
import {formConfig} from './config/search-config'
import tableConfig from './config/content-config'
import PageContent from "@/components/page-content/index";
import PageSearch from "@/components/page-search/index";
</script>

<style scoped></style>
