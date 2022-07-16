<template>
  <div class="echart">
     <div ref="echartRef" :style="{width:'100%' ,height:height}"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts"
import { EChartsOption } from 'echarts'
import {onMounted, PropType, ref, watchEffect} from "vue";
import {useEchart} from "@/base-ui/echart/hooks/useEchart";
const echartRef = ref<HTMLElement>()
const props= defineProps({
  height: {
    type: String,
    default: '360px',
  },
  options: {
    type: Object as PropType<EChartsOption>,
    default: () => ({}),
  },
})

onMounted(()=>{
  const {    setOption, echartsInstance} = useEchart(echartRef.value!)
  watchEffect(()=>{ //监听options变化 更新echarts
    setOption(props.options)
  })
})
</script>

<style scoped lang="less">
.echart {

}
</style>