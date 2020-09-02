<template>
  <div v-if="s.tab === 'theme'" class="theme">
    <h1>Themes</h1>
    <select v-model="s.theme" @change="applyTheme()">
      <option value="light">MY EYES!</option>
      <option value="dark">Dark</option>
    </select>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align:center;
}

</style>
