<template>
  <div class="tools" v-if="s.tab === 'tools'">
    <h1 v-if="tool===''">Tools</h1>
    <div v-if="tool===''">
      <div class="tool-item" @click="setTool('what-percent')">'A' is what percent of 'B'</div>
      <div class="tool-item" @click="setTool('percent-of')">What is 'A' percent of 'B'</div>
      <br>
      More tools coming soon!
    </div>
    <div v-if="tool!==''">
      <div class="backWrap">
        <img class="icon backBtn" @click="setTool('')" src="/icons/back.svg" title="back">
      </div>

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

    </div>
  </div>
</template>

<script>
export default {
  name: 'Tools',
  props: {
    s: Object
  },
  data:()=>{
    return{
      tool:'',
      ts:{
        a:'1',
        b:'3'
      }
    }
  },
  methods:{
    setTool(tool){
      this.tool = tool;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tools{
  
}
.tool-item{
  padding:1em;
  background:var(--accent2);
  width:85%;
  margin:0 auto;
  cursor: pointer;
}
.tool-item:nth-child(odd){
  background:var(--accent3);
}
.tool-item:hover{
  background:var(--accent);
}
.backWrap{
  text-align:left;
  padding-left:1rem;
}
.backBtn{
  cursor:pointer;
}
.backWrap .icon{
  max-width:32px;
  width:32px;
}
</style>
