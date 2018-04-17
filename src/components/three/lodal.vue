<template>
  <div id="threetop">
     <el-col :span="6" id="threetopone">
    <el-card shadow="never">
      <i class="el-icon-tickets"></i>
      <span>{{listsData[0].mold}}</span>
      <br>
      <span>{{listsData[0].number}}</span>
    </el-card>
  </el-col>
  <el-col :span="6" id="threetoptwo">
    <el-card shadow="never">
      <i class="el-icon-tickets"></i>
      <span>{{listsData[1].mold}}</span>
      <br>
      <span>{{listsData[1].number}}</span>
    </el-card>
  </el-col>
  </div>
</template>

<script>
export default {
      data(){
        return{
          listsData:[
            {
              mold:'现金账户',
              number:'￥126,560.00'
            },
            {
              mold:'今日消耗',
              number:'￥5,400'
            }
          ]
        }
      }
}
</script>

<style>
.el-icon-tickets{
  color: green;
  font-size:28px;
}
#threetop{
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
}
#threetopone,#threetoptwo{
  width: 25%;
  height:45px;
  margin-right:5%;
}
</style>
