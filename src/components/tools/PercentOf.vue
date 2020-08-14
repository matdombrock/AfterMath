<template>
  <div v-if="tool==='percent-of'">
    <h2>Percent Of</h2>
  
    <b>What is {{ts.a || 'A'}}% of {{ts.b || 'B'}}?</b>
    <hr>
    <input type="text" v-model="ts.a" placeholder="A (percent)"><br>
    percent of
    <input type="text" v-model="ts.b" placeholder="B (whole)"><br>
    <hr>
    Formula: ( percent / 100 ) * whole
    <br>
    Equation: ( {{ts.a || 'A'}} / 100 ) * {{ts.b || 'B'}}
    <hr>
    {{ts.a || 'A'}}% of {{ts.b || 'B'}} is <b>{{(ts.a/100)*ts.b}}</b>
    <div class="output" title="Result">{{(ts.a/100)*ts.b}}</div>
  </div>
</template>

<script>
export default {
  name: 'PercentOf',
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
