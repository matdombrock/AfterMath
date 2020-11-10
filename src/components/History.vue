<template>
  <div class="history">
    <!--ADVANCED-->
    <div v-if="s.config.show_advanced_history" class="history-table">
      <div v-for="(item,index) in s.tabs[s.tab].history" :key="index" class="history-item" title="History Item">
        {{item.output}}
        | 
        <img class="icon" src="/icons/load.svg" @click="loadHistory(item.output)" title="Load Result">
        <img class="icon" src="/icons/recycle.svg" @click="info(item)" title="Restore Equation">
        <img class="icon" src="/icons/cancel.svg" @click="deleteItem(index)" title="Delete Item">
      </div>
    </div>
    <!--REGULAR-->
    <div v-if="!s.config.show_advanced_history" class="history-table">
      <div v-for="(item,index) in s.tabs[s.tab].history" :key="index" class="history-item simple" @click="loadHistory(item.output)" title="History Item">
        {{item.output}}
      </div>
    </div>
    <span v-if="s.config.show_advanced_history && s.tabs[s.tab].history.length>0">
      <hr>
      <div @click="deleteHistory()" class="textBtn">Clear</div> | 
      <div @click="exportHistory()" class="textBtn">Export</div>
    </span>

  </div>
</template>

<script>
export default {
  name: 'History',
  props: {
    s: Object,
    copy: Function
  },
  methods:{
    loadHistory(val){
      this.s.tabs[this.s.tab].input = val;
    },
    deleteHistory(){
      this.s.tabs[this.s.tab].history = [];
    },
    deleteItem(index){
      this.s.tabs[this.s.tab].history.splice(index, 1);
    },
    exportHistory(){
      alert('Copied History To Clipboard!');
      this.copy(JSON.stringify(this.s.tabs[this.s.tab].history,null,2) || 'ERROR');
    },
    info(item){
      this.s.tabs[this.s.tab].input = item.input;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.history{
  padding:0;
  margin:0 auto;
  
}
.history-table{
  max-height:300px;
  overflow:auto;
}
.simple{
  cursor: pointer;
}
.history-item{
  padding:0.5em;
  background:var(--accentE);
  width:90%;
  margin:0 auto;
  font-family: var(--mono-font);
  color:var(--textBtn);
}
.history-item:nth-child(odd){
  background:var(--accentD);
}
.history-item:hover{
  background:var(--aftermath);
}
.history-item .icon{
  padding-left:0.1rem;
  padding-right:0.1rem;
  vertical-align: text-bottom;
  cursor: pointer;
}
.history-item .icon:hover{
  filter: invert(100%);
}
/* SCROLLBAR 8?
/* width */
.history ::-webkit-scrollbar {
  width: 2px;
}

/* Track */
.history ::-webkit-scrollbar-track {
  background: #1a1a1a;
}

/* Handle */
.history ::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.history ::-webkit-scrollbar-thumb:hover {
  background: #555;
}
/* .history-item:nth-child(odd):hover{
  background:blue;
} */
</style>
