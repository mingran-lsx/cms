<template>
  <div class="bar-echart">
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
      text: '特性示例：渐变色 阴影 点击缩放',
      subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    },
    xAxis: {
      data: props.x,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.y,
      }
    ]
  };
})
</script>

<style scoped lang="less">
.bar-echart {

}
</style>