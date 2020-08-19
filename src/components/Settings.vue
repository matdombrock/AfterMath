<template>
  <div v-if="s.tab === 'settings'" class="settings">
      <h1>Settings</h1>
      <div class="item" title="Display a num pad for mouse/touch input"> 
        <input v-model="s.config.show_number_pad" type="checkbox"> Show Number Pad
      </div>
      <div class="item" title="Show calculation history list"> 
        <input v-model="s.config.show_history" type="checkbox"> Show History 
      </div>
      <div class="item" v-if="s.config.show_history" title="Show advanced history tools"> 
        <input v-model="s.config.show_advanced_history" type="checkbox"> Show Advanced History 
      </div>
      <div class="item" v-if="!s.config.show_history" title="Show advanced history tools"> 
        <input type="checkbox" disabled> Show Advanced History 
      </div>
      <div class="item" title="Show a second calculator tab"> 
        <input v-model="s.config.show_tab2" type="checkbox"> Show 2nd Tab 
      </div>
      <div class="item" v-if="s.config.show_tab2" title="Show a third calculator tab"> 
        <input v-model="s.config.show_tab3" type="checkbox"> Show 3rd Tab 
      </div>
      <div class="item" v-if="!s.config.show_tab2" title="Show a third calculator tab">
        <input type="checkbox" disabled> Show 3rd Tab 
      </div>
      <div class="item" title="Show tools tab">
        <input v-model="s.config.show_tools_tab" type="checkbox"> Show Tools Tab 
      </div>
      <div class="item" title="Show Settings tab">
        <input v-model="s.config.show_settings_tab" type="checkbox" disabled> Show Settings Tab 
      </div>
      <div class="item" title="Show theme tab">
        <input v-model="s.config.show_theme_tab" type="checkbox"> Show Theme Tab 
      </div>
      <div class="item" title="Show info tab">
        <input v-model="s.config.show_info_tab" type="checkbox"> Show Info Tab 
      </div>
      <div class="item" title="Automatically calculate the current equation">
        <input v-model="s.config.auto_calculate" type="checkbox" disabled> Auto Calculate 
      </div>
      <div class="item" title="Update the equation input box with the last calculation when you press enter.">
        <input v-model="s.config.update_equation" type="checkbox" disabled> Update Equation 
      </div>
      <div class="item" title="Save settings and history between sessions.">
        <input v-model="s.config.persist_data" type="checkbox" disabled> Persists Data 
      </div>
      <div class="item" title="Enable advanced string output. Unit conversions ect.">
        <input v-model="s.config.enable_string_output" type="checkbox"> Enable String Output (Experimental)
      </div>
      <div class="item" title="Simplify equations if a result can't be found.">
        <input v-model="s.config.enable_simplification" type="checkbox"> Enable Simplification (Experimental)
      </div>
      <div class="item" title="Can we say bad words when we're mad?">
        <input v-model="s.config.enable_profanity" type="checkbox" disabled> Enable Profanity 
      </div>
      <div class="item" title="Load example equations on startup">
        <input v-model="s.config.load_example_equations" type="checkbox" disabled> Load Example Equations 
      </div>
      <div class="item" title="Show full equations with tool results">
        <input v-model="s.config.show_tool_equations" type="checkbox"> Show Tool Equations
      </div>
    </div>
</template>

<script>
export default {
  name: 'Settings',
  props: {
    s: Object
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
  border-top:1px solid var(--accent3);
}
</style>
