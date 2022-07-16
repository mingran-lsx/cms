import * as echarts from 'echarts';
import chinaMap from'../data/china.json'
echarts.registerMap('china', chinaMap);
export function useEchart(el:HTMLElement){
    const echartsInstance = echarts.init(el);
    const setOption= (option:any)=>{
        echartsInstance.setOption(option);
    }
    return {
        echartsInstance,
        setOption
    }
}