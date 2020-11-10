<template>
  <div v-if="s.tab === 'settings'" class="settings">
      <h1>Settings <img class="settings-icon" src="/icons/settings.svg"></h1> 
      <span v-for="(value,key) in defaultConfig" :key="key">

        <div v-if="deactivated(value)" class="item">
          <!-- <input value="false" type="checkbox" disabled> {{value.name}}
          <div class="description">{{value.description}}</div> -->
          <label class="switch">
            <input v-model="s.config[key]" type="checkbox" disabled> 
            <span class="slider round"></span>
          </label>
          <div style="display:inline">
            <h2>{{value.name}}</h2>
            <div class="description">
              {{value.description}}
              <div class="warning">This is deactivated by another setting!</div>
            </div>
          </div>
        </div>

        <div v-if="disabled(value)" class="item">
          <!-- <input v-model="s.config[key]" type="checkbox" disabled> {{value.name}}
          <div class="description">{{value.description}}</div> -->
          <label class="switch">
            <input v-model="s.config[key]" type="checkbox" disabled> 
            <span class="slider round"></span>
          </label>
          <div style="display:inline">
            <h2>{{value.name}}</h2>
            <div class="description">{{value.description}}</div>
            <div class="warning">This feature is not ready!</div>
          </div>
        </div>

        <div v-if="!deactivated(value) && !disabled(value)" class="item">
          <!-- <input v-model="s.config[key]" type="checkbox"> {{value.name}} -->
          <label class="switch">
            <input v-model="s.config[key]" type="checkbox"> 
            <span class="slider round"></span>
          </label>
          <div style="display:inline">
            <h2>{{value.name}}</h2>
            <div class="description">{{value.description}}</div>
          </div>
        </div>
        
      </span>
      <div class="btn-wrap">
        <button class="btn center" @click="resetSettings()">Reset Settings</button>
      </div>
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
    },
    resetSettings(){
      for(let [item, data] of Object.entries(this.defaultConfig)){
        //this.$set(this.s.config[item], data.value);
        this.s.config[item] = data.value;
      }
      console.log('reset settings');
      console.log(this.s.config);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align:center;
}
h2{
  padding-left:1rem;
  display:inline;
}
.settings{
  max-width:400px;
  text-align:left;
  margin:0 auto;
  padding:1em;
  padding-top:0;
}
.settings .item{
  padding:0.5em;
  border-top:1px solid var(--accentE);
}
.description{
  color:var(--textMuted);
}
.warning{
  color:var(--aftermath);
}
.settings-icon{
  width:2rem;
  filter: var(--icon-filter);
  vertical-align: middle;
}
</style>
