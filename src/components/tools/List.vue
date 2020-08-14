<template>
  <div v-if="tool==='list'">
    <h2>List (Array) Tools</h2>
  
    <b>Enter a list of comma separated values.</b>
    <hr>
    <textarea v-model="ts.list" placeholder="1, 2, 3"></textarea>
    <br>
    <select v-model="ts.operation">
      <option value="sum">Sum</option>
      <option value="product">Product</option>
      <option value="average">Average</option>
    </select>
    <div class="output" title="Result">{{ output }}</div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    tool: String
  },
  data:()=>{
    return{
      ts:{
        list:'1, 2, 3',
        operation:'sum'
      }
    }
  },
  computed:{
    output:function(){
      // This should be split into methods
      const list = this.ts.list.split(',');
      let result = 0;
      for(let item of list){
        switch(this.ts.operation){
          case 'sum':
            result += Number(item);
            break;
          case 'product':
            if(result === 0){
              result = Number(item);
            }else{
              result *= Number(item);
            }
            break;
          case 'average':
            result += Number(item);
        }
      }
      if(this.ts.operation==='average'){
        result = result / list.length;
      }
      return result;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
