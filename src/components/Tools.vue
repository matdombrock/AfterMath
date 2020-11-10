<template>
  <div class="tools" v-if="s.tab === 'tools'">
    {{updateUserTools()}}
    <h1 v-if="tool===''">Tools</h1>
    <div v-if="tool===''">
      <div v-for="(tool,id) in toolsList" :key="tool.name" @click="setTool(id)" class="tool-item">
        {{tool.name}}
      </div>
      <div class="tool-item" @click="setCustomTool('list')">List (array) Tools</div>
      <br>
      <div class="btn-wrap" v-if="s.config.enable_user_tools">
        <button class="btn center" @click="updateUserTools()">Reload User Tools</button>
      </div>
      More tools coming soon!
    </div>
    <div v-if="tool!==''">
      <div class="backWrap">
        <img class="icon backBtn" @click="setTool('')" src="/icons/back.svg" title="back">
      </div>

      <List :tool="tool" :s="s"/>

      <Template v-if="customTool===false" :tool="tool" :tools="toolsList" :s="s"/>
      

    </div>
  </div>
</template>

<script>
import List from './tools/List';
import Template from './tools/Template';

import tools from '../data/tools.json';

export default {
  name: 'Tools',
  components: {
    Template,
    List
  },
  props: {
    s: Object
  },
  data:()=>{
    return{
      tool:'',
      customTool: false,
      tools: tools,
      userTools: {},
      toolsList: {},
    }
  },
  methods:{
    setTool(tool){
      console.log(tool);
      this.tool = tool;
      this.customTool = false;
    },
    setCustomTool(tool){
      this.tool = tool;
      this.customTool = true;
    },
    updateUserTools(){
      if(!this.s.config.enable_user_tools){
        console.log('User Tools Disabled');
        this.toolsList = {...this.tools};//reset to default
        return;
      }
      console.log('reloading tools');
      const { ipcRenderer } = window.require('electron');
      console.log();
      this.userTools = ipcRenderer.sendSync('get-tools');
      if(this.userTools){
        this.toolsList = {...this.tools};//reset to default
        this.userTools = JSON.parse(this.userTools);
        for(let [id,tool] of Object.entries(this.userTools)){
          tool.name = '☆ ' + tool.name + ' ☆';
          //this.tools[id] = tool;
          console.log('loading custom tool: '+id);
          this.$set(this.toolsList, id, tool);
        }
      }
    }
  },
  mounted(){
    this.updateUserTools();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tool-item{
  padding:1em;
  background:var(--accentD);
  width:85%;
  margin:0 auto;
  cursor: pointer;
  color: var(--textBtn);
}
.tool-item:nth-child(odd){
  background:var(--accentE);
}
.tool-item:hover{
  background:var(--aftermath);
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
