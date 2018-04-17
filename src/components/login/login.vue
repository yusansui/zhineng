<template>
  <div>
      <span v-on:click='login'>登录</span>
    <h1>login</h1>
  </div>

</template>

<script>
export default {
    methods:{
        login(){
            this.$router.push('/index')
        }
    }
}
</script>

<style>

</style>
