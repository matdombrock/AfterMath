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

      <div v-if="s.tab === 'theme'">
        <h1>Theme</h1>
        Theme options coming soon!
      </div>

      <Settings :s="s" />

      <div style="margin-top:48px"></div>
      <TopTabs :s="s"/>
    </div><!--app area-->
  </div>
</template>

<script>
import TopTabs from './components/TopTabs.vue';
import Numpad from './components/Numpad';// adding .vue causes error?
import History from './components/History.vue';
import Settings from './components/Settings.vue';
import Tools from './components/Tools.vue';
//import Tab from './components/Tab.vue';
import {evaluate, simplify, parse} from 'mathjs';


export default {
  name: 'App',
  components: {
    Numpad,
    TopTabs,
    History,
    Tools,
    //Tab,
    Settings
  },
  data:()=>{
    return{
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
        config:{
          show_number_pad: false,
          show_history: true,
          show_advanced_history: true,
          show_tab2:true,
          show_tab3:true,
          auto_calculate:true,
          update_equation: true,
          persist_data: false,
          enable_string_output:false,
          enable_simplification: false,
          enable_profanity: false,
          load_example_equations: true,
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
    }
  },
  mounted(){
    const app = this;
    document.addEventListener('keydown', function(event) {
      //const key = event.key; // "a", "1", "Shift", etc.
      document.getElementById("input").focus();
      console.log(event.key);
      if (event.key === "Delete") {
          app.s.input = '';
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
    
  },
  methods:{
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
  src: url("/fonts/LiberationMono-Regular.ttf");
}
:root{
  --bg: rgb(48, 48, 48);
  --dark: rgb(20, 20, 20);
  --text: rgba(224, 224, 224, 1);
  --textHighlight: rgb(233, 233, 233);
  --darkish: rgb(32, 32, 32);
  --accent: rgb(46, 46, 46);
  --accent2: rgb(66, 66, 66);
  --accent3: rgb(94, 94, 94);

  --mono-font: LiberationMono;
  --regular-font: fallingSky;
}
#app {
  font-family: fallingSky;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
body{
  background:var(--bg);
  color:var(--text);
  margin:0 auto;
  overflow-y:scroll;
  xtext-transform: uppercase;
}
a{
  color:var(--text)
}
input[type=text], textarea{
  width:90%;
  padding:0.75rem;
  background:var(--dark);
  color:var(--text);
  font-size:2rem;
  border:none;
  font-family: var(--mono-font)
}
hr{
  border-color: var(--accent3);
}
.app-area{
  background:var(--bg);
}
.output{
  font-size:2rem;
  padding:1rem;
  color:var(--textHighlight);
  font-weight: bold;
  cursor: copy;
  font-family: var(--mono-font)
}
.output .icon{
  cursor: pointer;
}
.output .icon:hover{
  filter: invert(100%);
}
.textBtn{
  display:inline;
  cursor:pointer;
}
.icon{
  max-width:16px;
  filter: invert(85%);
  user-select: none;
}
/* SCROLLBAR 8?
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #1a1a1a;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
