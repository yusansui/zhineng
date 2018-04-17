<template>
  <div class="fivemain">
    <top class="header"></top>
    <Firstt></Firstt>
    <FiveDate></FiveDate>
    <meddile></meddile>
    
    <FiveBottom></FiveBottom>
  </div>
</template>
<script>
import top from './fiveTop'
import Firstt from './fiveFirst'
import meddile from './fiveMeddile'
import FiveDate from './fiveDate'
import FiveBottom from './xttBottom'

 export default {
   name:'five',
    components:{
      top,
      Firstt,
      meddile,
      FiveDate,
      FiveBottom
   }
}
   
</script>

<style>

</style>
