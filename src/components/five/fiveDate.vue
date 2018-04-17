<template>
    <div id="fivemain">
        <div id="fivebox">      
    <el-button type="primary">
      <router-link to='/index/1'>+新建创意</router-link>
      </el-button>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    </div>
    <div id="fiveboxt">
      <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      start-placeholder="请选择订单日期"
      end-placeholder=" "
      :picker-options="pickerOptions2">
    </el-date-picker>
    <el-select v-model="value2" placeholder="请选择">
      <el-option
        v-for="item in optionsList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    </div>
      </div>
</template>

<script>
 export default {
    data() {
      return {
         options: [{
          value: '选项1',
          label: '批量修改'
        }, {
          value: '选项2',
          label: '单个修改'
        }, {
          value: '选项3',
          label: '不改了'
        }],
        value: '',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
         optionsList: [{
          value: '选项1',
          label: '敲代码'
        }, {
          value: '选项2',
          label: '敲不动'
        }, {
          value: '选项3',
          label: '啊啊啊啊'
        }],
        value2: '',
      };
    }       
  };
</script>

<style>
#fivemain{
  width: 100%;
  height:25p;
}
#fivebox{
  float: left;
}
#fiveboxt{
  float: right;
}
</style>
