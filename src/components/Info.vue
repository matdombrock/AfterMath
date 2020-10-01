<template>
  <div v-if="s.tab === 'info'">
    <h1>AFTERMATH</h1>
    <img src="logo-trans.png" class="logo">
    <i>A stupidly over-engineered calculator app.</i>
    <br>
    Made by <a href="https://matdombrock.com" target="_blank">Mathieu Dombrock</a>
    <br>
    Powered by <a href="https://mathjs.org/" target="_blank">MathJS</a>
    <hr>
    <h2>NEED HELP?</h2>
    <a class="btn" href="https://github.com/matdombrock/AfterMath/blob/master/README.md" target="_blank">
      User Guide
    </a>
    <br>
      <h2>¯\_(ツ)_/¯</h2>
    <div class="help">
      
      <!-- GENERATED FROM https://dillinger.io/ -->
      
      
      <!-- END GENERATED -->
    </div>
    
  </div>
</template>

<script>
import configManager from '../tools/configManager';
export default {
  name: 'Theme',
  props: {
    s: Object,
    applyTheme: Function
  },
  data:()=>{
    return{
      configManager: configManager
    }
  },
  methods:{
    test(){
      alert();
    }
  },
  mounted(){
    //require("shell").openExternal("http://www.google.com");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align:center;
  margin-bottom:0;
}
.help{
  text-align:left;
  padding:1rem;
}
.logo{
  max-width:25vw;
  display:block;
  margin:0 auto;
}
</style>
