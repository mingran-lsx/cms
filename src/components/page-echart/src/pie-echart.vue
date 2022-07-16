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
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
})
</script>

<style scoped lang="less">
.pie-echart {

}
</style>