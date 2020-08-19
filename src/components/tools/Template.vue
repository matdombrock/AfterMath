<template>
  <div v-if="tool!==''">
    <h2>{{ls.toolData.name}}</h2>
    <b>{{description}}?</b>
    <hr>
    <div v-for="item in Object.keys(ls.toolData.variables)" :key="item">
      {{item.toUpperCase()}}
      <br>
      <i>{{ls.toolData.variables[item].description}}</i><br>
      <input type="text" v-model="ls.vars[item]" placeholder="123"><br>
    </div>

    <div class="output" title="Result">
      <span v-if="s.config.show_tool_equations">
        {{formula}} = 
      </span>
      {{outputString}}
    </div>

    <pre v-if="false" style="text-align:left">
      <hr>
      <strong>Custom Tool Data:</strong><br>
{{toolJSON}}
      <hr>
    </pre>

  </div>
  
</template>

<script>
import {evaluate} from 'mathjs';
//import tools from '../../data/tools.json';

export default {
  name: 'Template',
  props: {
    s:Object,
    tool: String,
    tools :Object
  },
  data:()=>{
    return{
      ls:{
        toolData:{
          "name": "What Percent",
          "description": "{{part}} is what percent of {{whole}}",
          "output": "{{output}}%",
          "variables": {
            "part": {
              "type": "Number",
              "default": 1,
              "description": "The amount we want to compare to the whole."
            },
            "whole": {
              "type": "Number",
              "default": 2,
              "description": "The entire amount."
            }
          },
          "formula": "(part / whole) * 100"
        },
        vars:{}
      }
      
    }
  },
  created(){
    this.generateVariables();
    //this.loadTool();
  },
  mounted(){
    this.loadTool();
    this.generateVariables();
  },
  updated(){
    this.buildFormula();
  },
  computed:{
    formula: function(){
      return this.buildFormula();
    },
    output: function(){
      const formula = this.buildFormula();
      return evaluate(formula);
    },
    outputString: function(){
      let custom = this.ls.toolData.output;
      if(custom){
        custom = custom.replace('{{output}}',this.output);
        return custom;
      }
      return this.output;
    },
    description: function(){
      return this.buildDescription();
    },
    toolJSON: function(){
      return this.buildToolJSONString();
    }
  },
  methods:{
    loadTool(){
      const tool = this.tools[this.tool];
      this.$set(this.ls, 'toolData', tool);
    },
    generateVariables(){
      for(let item of Object.keys(this.ls.toolData.variables)){
        this.$set(this.ls.vars, item, this.ls.toolData.variables[item].default || 0);
      }
    },
    buildFormula(){
      let formula = this.ls.toolData.formula;
      for(let item of Object.keys(this.ls.vars)){
        formula = formula.replace(item,this.ls.vars[item] || 0);
      }
      return formula;
    },
    buildDescription(){
      let result = this.ls.toolData.description;
      for(let item of Object.keys(this.ls.toolData.variables)){
        result = result.replace(`{{${item}}}`, this.ls.vars[item] || item.toUpperCase());
      }
      return result;
    },
    buildToolJSONString(){
      return JSON.stringify(this.ls.toolData,null,2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
