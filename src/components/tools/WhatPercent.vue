<template>
  <div v-if="tool==='what-percent'">
    <h2>What Percent</h2>
    <b>{{ts.a || 'A'}} is what percent of {{ts.b || 'B'}}?</b>
    <hr> 
    <input type="text" v-model="ts.a" placeholder="A (part)"><br>
    is what percent of
    <input type="text" v-model="ts.b" placeholder="b (whole)"><br>
    <hr>
    Formula: ( part / whole ) * 100
    <br>
    Equation: ( {{ts.a || 'A'}} / {{ts.b || 'B'}} ) * 100
    <hr>
    {{ts.a || 'A'}} is <b>{{(ts.a/ts.b)*100}}%</b> of {{ts.b || 'B'}}
    <div class="output" title="Result">{{(ts.a/ts.b)*100}}%</div>
  </div>
</template>

<script>
export default {
  name: 'WhatPercent',
  props: {
    tool: String
  },
  data:()=>{
    return{
      ts:{
        a:'1',
        b:'3'
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
