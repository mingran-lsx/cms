<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <sx-card title="分类商品数量(饼图)">
          <pie-echart :data="categoryGoodsCount"></pie-echart>
        </sx-card>
      </el-col>
      <el-col :span="10">
        <sx-card title="不同城市商品销量">
          <map-echart :data="addressGoodsSale"></map-echart>
        </sx-card>
      </el-col>
      <el-col :span="7">
        <sx-card title="分类商品数量(玫瑰图)">
          <rose-echart :data="categoryGoodsCount"></rose-echart>
        </sx-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="footer">
      <el-col :span="12">
        <sx-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </sx-card>
      </el-col>
      <el-col :span="12">
        <sx-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </sx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import SxCard from '@/base-ui/card/src/card.vue'
import {useStore} from "vuex";
import PieEchart from '@/components/page-echart/src/pie-echart.vue'
import RoseEchart from '@/components/page-echart/src/rose-echart.vue'
import BarEchart from '@/components/page-echart/src/bar-echart.vue'
import LineEchart from '@/components/page-echart/src/line-echart.vue'
import MapEchart from '@/components/page-echart/src/map-echart.vue'
import {computed} from "vue";
const store =useStore()
store.dispatch('dashboard/getDashboardDataAction')
const categoryGoodsCount=computed(()=>{
  return  store.state.dashboard.categoryGoodsCount.map(item=>{
    return {
      name:item.name,
      value:item.goodsCount
    }
  })
})
const addressGoodsSale=computed(()=>{
  return  store.state.dashboard.addressGoodsSale.map(item=>{
    return {
      name:item.address,
      value:item.count
    }
  })
})
const categoryGoodsSale=computed(()=>{
  const x:string[] = []
  const y:number[] = []
  store.state.dashboard.categoryGoodsSale.forEach(item=>{
    x.push(item.name)
    y.push(item.goodsCount)
  })
  return {
    x,
    y
  }
})
const categoryGoodsFavor = computed(()=>{
  const x:string[] = []
  const y:number[] = []
  store.state.dashboard.categoryGoodsFavor.forEach(item=>{
    x.push(item.name)
    y.push(item.goodsFavor)
  })
  return {
    x,
    y
  }
})
</script>

<style scoped>
.footer{
  margin-top: 20px;
}
</style>
