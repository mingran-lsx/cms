<template>
  <div class="line-echart">
  <SxEchart :options="options"></SxEchart>
  </div>
</template>

<script lang="ts" setup>
// import
import {computed, PropType} from "vue";
import SxEchart from "@/base-ui/echart/index";
import * as echarts from 'echarts';
const props=defineProps({
  x: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  y: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
})

const options= computed(()=>{
  return {
    title: {
      text: 'Stacked Area Chart'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.x,
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.y
      },

    ]
  };
})
</script>

<style scoped lang="less">
.line-echart {

}
</style>