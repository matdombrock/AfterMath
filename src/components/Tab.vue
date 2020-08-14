<template>
  <div v-if="s.tab === tabName">
    <input v-model="s.tabs[s.tab].input" id="input" type="text" placeholder="12345678" title="Input Equation">
    <!-- <textarea v-model="s.input" type="text" placeholder="a fancy front-end for mathjs"></textarea> -->
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    s: Object,
    tabName: String,
    output: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
