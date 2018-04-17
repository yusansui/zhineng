<template>
    <div id="creativity">
        <h1>广告创意</h1>
        <h3>落地页</h3>
        <p class="pro_tit">
            <span>着陆页地址</span>
            <el-input v-model="input" placeholder="请设置广告名称"></el-input>
            <b>预览</b>
        </p>
        <h3>上传创意</h3>
        <!-- <router-link to="/index/1/FirstList">+新建创意</router-link> -->
       <el-button type="text" @click="open">+新建创意</el-button>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for='(vla,index) in yss' :key='index' :label="vla" :name="vla" >
                <first-list></first-list>
            </el-tab-pane>
         </el-tabs>
       <!-- <ul>
           <li v-for='(vla,index) in yss' :key='index' v-text='vla'></li>
       </ul> -->
        
    </div>
</template>

<script>
import FirstList from './FirstList'
 export default {
     data(){
        return{
            yss:[]
        }
    },
    methods: {
        handleClick(tab, event) {
            this.yss.push('创意1')
        console.log(tab, event);
      },
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    },
      

    
    components:{
        FirstList
    }
  }
// export default {

// }
</script>

<style>
#creativity{
    flex: 1;
    padding-left: 12px;
}
h1{
    font-size: 24px;
    line-height: 45px;
    font-weight: 400;
}
h3{
    line-height: 36px;
    font-size: 20px;
    margin: 20px 0;
}
.pro_tit{
    display: inline-flex;
    height: 45px;
    align-items: center;
}
.el-input__inner{
    /* width: 30%; */
}
.pro_tit span{
    padding: 0 10px;
    width: 150px;
}
b{
    font-weight: 400;
    width: 50px;
}
</style>
