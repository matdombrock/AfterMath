<template>
  <div class="tools" v-if="s.tab === 'tools'">
    <h1 v-if="tool===''">Tools</h1>
    <div v-if="tool===''">
      <div class="tool-item" @click="setTool('what-percent')">'A' is what percent of 'B'</div>
      <div class="tool-item" @click="setTool('percent-of')">What is 'A' percent of 'B'</div>
      <div class="tool-item" @click="setTool('list')">List (array) Tools</div>
      <br>
      More tools coming soon!
    </div>
    <div v-if="tool!==''">
      <div class="backWrap">
        <img class="icon backBtn" @click="setTool('')" src="/icons/back.svg" title="back">
      </div>

      <WhatPercent :tool="tool"/>
      <PercentOf :tool="tool"/>
      <List :tool="tool"/>
      

    </div>
  </div>
</template>

<script>
import PercentOf from './tools/PercentOf';
import WhatPercent from './tools/WhatPercent';
import List from './tools/List';
export default {
  name: 'Tools',
  components: {
    PercentOf,
    WhatPercent,
    List
  },
  props: {
    s: Object
  },
  data:()=>{
    return{
      tool:'',
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
