<template>
  <div>
    <lodal></lodal>
    <datetime></datetime>
    <div id="threemain">
        <list></list>
        <div id="main"> 
        </div>
    </div>
    
  </div>
</template>

<script>
import echarts from 'echarts'
import lodal from './lodal.vue'
import datetime from './DateTime.vue'
import list from './List.vue'

export default {
  components: {
    lodal,
    datetime,
    list
  },

    mounted(){
      var myChart = echarts.init(document.getElementById('main'));
      console.log(myChart)
        myChart.setOption ( {
    xAxis: {
        type: 'category',
        data: ['2016/10', '2016/11', '2016/12', '2017/01', '2017/02']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1100, 1380, 1350, 1600, 1600],
        type: 'line'
    }]
});
    }
}



</script>

<style>
#threemain{
  width: 100%;
  height: 100%;
  background:#fff;
}
  #main {
    width: 100%;
    height: 285px;
    background-color:#fff;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
