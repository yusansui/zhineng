<template>
  <div id="app">
      <el-container>
          <el-aside width="200px">
  <el-col >
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
      >
      <el-menu-item index="/index/1">
        <i class="el-icon-menu"></i>
        <span slot="title">新建广告</span>
      </el-menu-item>
      <el-menu-item index="/index/2">
        <i class="el-icon-menu"></i>
        <span slot="title">首页浏览</span>
      </el-menu-item>
      <el-submenu index="0">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>广告管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="/index/3">广告计划</el-menu-item>
          <el-menu-item index="/index/4">广告单元</el-menu-item>
          <el-menu-item index="/index/5">广告创意</el-menu-item>
        </el-menu-item-group>
      </el-submenu>      
      <el-menu-item index="/index/6">
        <i class="el-icon-document"></i>
        <span slot="title">数据中心</span>
      </el-menu-item>
      <el-menu-item index="/index/7">
        <i class="el-icon-setting"></i>
        <span slot="title">工具箱</span>
      </el-menu-item>
    </el-menu>
  </el-col>
          </el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style>
  .el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #022050;
    text-align: center;
    color:#333;
    line-height: 200px;
  }
  .el-menu {
    border-right: solid 1px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    background-color: #022050;
    padding-left: 0;
  }
 .el-menu-item {
   color:#fff;
 }
  
  .el-main {
    background-color: rgb(254, 254, 255);
    color: #333;
    text-align: left;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    background:#022050;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
