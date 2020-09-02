<template>
  <div class="top-tabs">

    <div :class="{tab:true, 'active-tab': isActive('1')}" @click="setTab('1')" title="Tab 1">
      <img class="tab-icon" src="/icons/tab1.svg">
    </div>

    <span v-if="s.config.show_tab2">
      <div :class="{tab:true, 'active-tab': isActive('2')}" @click="setTab('2')" title="Tab 2">
        <img class="tab-icon" src="/icons/tab2.svg">
      </div>
      <div v-if="s.config.show_tab3" :class="{tab:true, 'active-tab': isActive('3')}" @click="setTab('3')" title="Tab 3">
        <img class="tab-icon" src="/icons/tab3.svg">
      </div>
    </span>

    <div v-if="s.config.show_tools_tab" :class="{tab:true, 'active-tab': isActive('tools')}" @click="setTab('tools')" title="Tools">
      <img class="tab-icon" src="/icons/tools.svg">
    </div>

    <div v-if="s.config.show_settings_tab" :class="{tab:true, 'active-tab': isActive('settings')}" @click="setTab('settings')" title="Settings">
      <img class="tab-icon" src="/icons/settings.svg">
    </div>

    <div v-if="s.config.show_theme_tab" :class="{tab:true, 'active-tab': isActive('theme')}" @click="setTab('theme')" title="Theme">
      <img class="tab-icon" src="/icons/theme.svg">
    </div>
    
    <div v-if="s.config.show_info_tab" :class="{tab:true, 'active-tab': isActive('info')}" @click="setTab('info')" title="Info">
      <img class="tab-icon" src="/icons/info2.svg">
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'TopTabs',
  props: {
    s: Object
  },
  methods:{
    setTab(val){
      this.s.tab = val;
    },
    isActive(name){
      if(this.s.tab === name){
        return true;
      }
      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-tabs{
  text-align:left;
  background:var(--accentA);
  position:fixed;
  bottom:0;
  width:100%;
  user-select: none;
}
.tab{
  display:inline-block;
  padding:0.5rem;
  padding-left:0.2rem;
  cursor: pointer;
  line-height:0em;
  background: var(--bg);
  background: linear-gradient(90deg, var(--accentA) 0%, var(--accentB) 15%, var(--accentB) 100%);
  border:0px solid;
  border-bottom-right-radius: 10px;
  width:32px;
  text-align:center;
  transition: all 0.1s;
}
.tab:hover{
  background:var(--bg);
  border-bottom-left-radius: 10px;
  padding-left:0.5rem;
}
.active-tab{
  background:var(--bg);
  border-bottom-left-radius: 10px;
  padding-left:0.5rem;
}
.tab-icon{
  width:16px;
  filter: var(--icon-filter);
}
</style>
