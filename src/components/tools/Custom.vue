<template>
  <div v-if="tool==='custom'">
    <h2>{{s.toolData.name}}</h2>
    <b>{{description}}?</b>
    <hr>
    <div v-for="item in Object.keys(s.toolData.variables)" :key="item">
      {{item.toUpperCase()}}
      <br>
      <i>{{s.toolData.variables[item].description}}</i><br>
      <input type="text" v-model="s.vars[item]" placeholder="123"><br>
    </div>

    <div class="output" title="Result">{{outputString}}</div>

    <div v-if="false">
      <hr>
      <strong>Equation:</strong><br>
      {{formula}}
      <hr>
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
import tools from '../../data/tools.json';

export default {
  name: 'Custom',
  props: {
   tool: String
  },
  data:()=>{
    return{
      s:{
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
      let result = this.s.toolData.output;
      result = result.replace('{{output}}',this.output);
      return result;
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
      const tool = tools['what-percent'];
      this.$set(this.s, 'toolData', tool);
    },
    generateVariables(){
      for(let item of Object.keys(this.s.toolData.variables)){
        this.$set(this.s.vars, item, this.s.toolData.variables[item].default || 0);
      }
    },
    buildFormula(){
      let formula = this.s.toolData.formula;
      for(let item of Object.keys(this.s.vars)){
        formula = formula.replace(item,this.s.vars[item] || 0);
      }
      return formula;
    },
    buildDescription(){
      let result = this.s.toolData.description;
      for(let item of Object.keys(this.s.toolData.variables)){
        result = result.replace(`{{${item}}}`, this.s.vars[item] || item.toUpperCase());
      }
      return result;
    },
    buildToolJSONString(){
      return JSON.stringify(this.s.toolData,null,2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
