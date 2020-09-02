<template>
  <div v-if="s.tab === 'settings'" class="settings">
      <h1>Settings</h1> 
      <span v-for="(value,key) in defaultConfig" :key="key">
        <div v-if="deactivated(value)" class="item" :title="value.description">
          <input value="false" type="checkbox" disabled> {{value.name}}
        </div>
        <div v-if="disabled(value)" class="item" :title="value.description">
          <input v-model="s.config[key]" type="checkbox" disabled> {{value.name}}
        </div>
        <div v-if="!deactivated(value) && !disabled(value)" class="item" :title="value.description">
          <input v-model="s.config[key]" type="checkbox"> {{value.name}}
        </div>
        
      </span>
    </div>
</template>

<script>
import configManager from '../tools/configManager';
export default {
  name: 'Settings',
  props: {
    s: Object
  },
  data:()=>{
    return{
      defaultConfig: configManager.defaultConfig
    }
  },
  methods:{
    deactivated(value){
      return value.if ? this.s.config[value.if]===false : false;
    },
    disabled(value){
      return value.disabled || false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align:center;
}
.settings{
  max-width:300px;
  text-align:left;
  margin:0 auto;
  padding:1em;
  padding-top:0;
}
.settings .item{
  padding:0.5em;
  border-top:1px solid var(--accentE);
}
</style>
