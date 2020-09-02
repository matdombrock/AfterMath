<template>
  <div id="app">
    

    <div class="app-area">
      <br>
      <div v-if="!Number.isNaN(Number(s.tab))">
        <input v-model="s.tabs[s.tab].input" id="input" type="text" placeholder="12345678" title="Input Equation">
        <!-- <textarea v-model="s.input" type="text" placeholder="a fancy front-end for mathjs"></textarea> -->
        <div class="output" title="Copy Result" @click="copy()">
          {{output}} <!-- <img class="icon" @click="copy()" src="/icons/copy.svg" title="Copy"> -->
        </div> 
        <Numpad :s="s" v-if="s.config.show_number_pad"/>
        <History :s="s" :copy="copy" v-if="s.config.show_history"/>
      </div>   

      <Tools :s="s" />
      <Theme :s="s" :applyTheme="applyTheme" />

      <div v-if="s.tab === 'info'">
        <h1>AFTERMATH</h1>
        <i>A Stupidly over-engineered calculator app.</i>
        <br>
        GPL3
        <br>
        Made by <a href="https://matdombrock.com" target="_blank">Mathieu Dombrock</a>
        <br>
        Powered by <a href="https://mathjs.org/" target="_blank">MathJS</a>
      </div>

      <Settings :s="s" />

      <div style="margin-top:28px"></div>
      <TopTabs :s="s"/>
    </div><!--app area-->
  </div>
</template>

<script>
const { ipcRenderer } = window.require('electron');
import configManager from './tools/configManager';

import TopTabs from './components/TopTabs.vue';
import Numpad from './components/Numpad';// adding .vue causes error?
import History from './components/History.vue';
import Settings from './components/Settings.vue';
import Tools from './components/Tools.vue';
import Theme from './components/Theme.vue';
//import Tab from './components/Tab.vue';
import {evaluate, simplify, parse} from 'mathjs';
// Theme

import './themes/base.css';
import themeDark from './themes/dark.json';
import themeLight from './themes/light.json';

export default {
  name: 'App',
  components: {
    Numpad,
    TopTabs,
    History,
    Tools,
    Theme,
    //Tab,
    Settings
  },
  data:()=>{
    return{
      themes:{
        dark: themeDark,
        light: themeLight
      },
      s:{
        tabs:{
          '1':{
            input: 'sin(45 deg) ^ sqrt(2 + 5!) + pi',
            history: [],
          },
          '2':{
            input: '(pi * 10)! / pi',
            history: [],
          },
          '3':{
            input: 'x^2 + x + 4(x) - y',
            history: [],
          },
        },
        input: 'sin(45 deg) ^ sqrt(2 + 5!) + pi',
        history: [],
        tab: '1',
        config: configManager.configValues,
        theme:'dark',
        tools:{

        }
      }
    }
  },
  computed:{
    output: function(){
      let joined = this.s.tabs[this.s.tab].input;
      if(joined!==''){
        try{
          const result = evaluate(joined);
          //this.history.push(result);
          if(!Number.isNaN(Number(result)) || this.s.config.enable_string_output){
            return result;
          }
        }catch(err){
          //console.log(err);
          console.log(joined);
        }
        try{
          joined = parse(joined);
          const result = simplify(joined).toString();
          //this.history.push(result);
          if(!Number.isNaN(Number(result)) || this.s.config.enable_simplification ||this.s.config.enable_string_output){
            return result;
          }
        }catch(err){
          //console.log(err);
          console.log(joined);
        }
      }
      return 'FUCK';
      //return NaN;
    },
    isElectron: function(){
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.indexOf(' electron/') > -1) {
        return true;
      }
      return false;
    }
  },
  mounted(){
    const app = this;
    this.loadState();
    this.applyTheme();
    this.saveState();
    document.addEventListener('keydown', function(event) {
      //const key = event.key; // "a", "1", "Shift", etc.
      document.getElementById("input").focus();
      console.log(event.key);
      if (event.key === "Delete" || event.key === "Escape") {
          app.s.tabs[app.s.tab].input = '';
      }
      if (event.key === "Enter") {
          // Open Menu...
          if(isNaN(app.output)===false){
            app.s.tabs[app.s.tab].history.unshift({input: app.s.tabs[app.s.tab].input, output: app.output});
            app.s.tabs[app.s.tab].input = app.output;
          }
      }
    });
    document.addEventListener('mouseover', function() {
      //const key = event.key; // "a", "1", "Shift", etc.
      //console.log('mouse');
      //document.getElementById("input").focus();
    });
    if(this.isElectron){
      // move this to tools
      const { ipcRenderer } = window.require('electron');
      console.log(ipcRenderer.sendSync('get-tools'));
    }
  },
  methods:{
    applyTheme(){
      for(let [item, data] of Object.entries(this.themes[this.s.theme])){
          setP(item,data);
      }
      function setP(key,val){
        document.documentElement.style.setProperty(key,val);
      }
    },
    copy(str){
      if(!str){
        str =  this.output;
      }
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
    saveState(){
      console.log();
      setInterval(function(app){
        const json = JSON.stringify(app.s,null,2);
        if(!app.isElectron){
          localStorage.setItem('state',json);
          console.log('State Saved');
          return;
        }
        ipcRenderer.send('save-state', json);
        //console.log('State Saved');
      },500, this);
      
    },
    loadState(){
      if(!this.isElectron){
        let loaded = localStorage.getItem('state');
        console.log(loaded);
        if(loaded){
          loaded = JSON.parse(loaded);
          this.$set(this.s, loaded);
        }else{
          console.log('COULD NOT LOAD STATE');
        }
        return;
      }
      const loaded = ipcRenderer.sendSync('load-state');
      if(!loaded){
        console.log('COULD NOT LOAD STATE');
        return;
      }
      console.log(loaded);
      this.$set(this, 's', loaded);
      console.log('LOADED STATE');
    }
  }
}
</script>

<style>
@font-face {
  font-family: "anonpro";
  src: url("/fonts/Anonymous_Pro.ttf");
}
@font-face {
  font-family: "soupofjustice";
  src: url("/fonts/soupofjustice.ttf");
}
@font-face {
  font-family: "FallingSky";
  src: url("/fonts/FallingSky.otf");
}
@font-face {
  font-family: "LiberationMono";
  src: url("/fonts/LiberationMono.ttf");
}
</style>