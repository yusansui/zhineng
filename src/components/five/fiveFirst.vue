<template>
  <el-select v-model="value" clearable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '投放中'
        }, {
          value: '选项2',
          label: '未进行'
        }, {
          value: '选项3',
          label: '已完成'
        }],
        value: ''
      }
    }
  }
</script>