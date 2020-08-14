<template>
  <div class="numpad">
    <hr>
    <button class="numpad" @click="numpadBtn(7)">7</button>
    <button class="numpad" @click="numpadBtn(8)">8</button>
    <button class="numpad" @click="numpadBtn(9)">9</button>
    <br>
    <button class="numpad" @click="numpadBtn(4)">4</button>
    <button class="numpad" @click="numpadBtn(5)">5</button>
    <button class="numpad" @click="numpadBtn(6)">6</button>
    <br>
    <button class="numpad" @click="numpadBtn(1)">1</button>
    <button class="numpad" @click="numpadBtn(2)">2</button>
    <button class="numpad" @click="numpadBtn(3)">3</button>
    <br>
    <button class="numpad" @click="numpadBtn(0)">0</button>
    <br>
    <button class="numpad" @click="numpadBtn('+')">+</button>
    <button class="numpad" @click="numpadBtn('-')">-</button>
    <button class="numpad" @click="numpadBtn('/')">/</button>
    <button class="numpad" @click="numpadBtn('*')">*</button>
    <button class="numpad" @click="numpadBtn('=')">=</button>
    <button class="numpad" @click="numpadBtn('.')">.</button>
    <br>
    <button class="numpad" @click="numpadBtn('(')">(</button>
    <button class="numpad" @click="numpadBtn(')')">)</button>
    <button class="numpad" @click="numpadBtn('[')">[</button>
    <button class="numpad" @click="numpadBtn(']')">]</button>
    <button class="numpad" @click="numpadBtn('%')">%</button>
    <button class="numpad" @click="numpadBtn('^')">^</button>
    <br>
    <button class="numpad" @click="numpadBtn('sin(')">sin</button>
    <button class="numpad" @click="numpadBtn('cos(')">cos</button>
    <button class="numpad" @click="numpadBtn('deg(')">deg</button>
    <button class="numpad" @click="numpadBtn('abs(')">abs</button>
    <button class="numpad" @click="numpadBtn('sqrt(')">sqrt</button>
    <br>
    <button class="numpad" @click="numpadBtn(' ')">_</button>
    <button class="numpad" @click="numpadBtn('')">del</button>
    <button class="numpad" @click="numpadBtn('')">clr</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Numpad',
  props: {
    s: Object
  },
  methods:{
    numpadBtn(val){
      this.s.input += val;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.numpad button{
  background:rgb(31, 31, 31);
  color:white;
  padding-left:0.5rem;
  padding-right:0.5rem;
  border:1px solid rgb(129, 129, 129);
  font-size:2.5rem;
  cursor:pointer;
  min-width:48px;
  border-radius: 10px;
}
.numpad button:hover{
  background:rgb(138, 138, 138);
}
</style>
