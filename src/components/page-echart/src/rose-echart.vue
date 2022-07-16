<template>
  <div class="pie-echart">
  <SxEchart :options="options"></SxEchart>
  </div>
</template>

<script lang="ts" setup>
// import
import {computed, PropType} from "vue";
import SxEchart from "@/base-ui/echart/index";
const props=defineProps({
  data: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
})

const options= computed(()=>{
  return {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data:props.data
      }
    ]
  };
})
</script>

<style scoped lang="less">
.pie-echart {

}
</style>