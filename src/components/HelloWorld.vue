<template>
  <div class="hello">
    <!-- prototype -->
    <div id="app" v-html="greeting"></div>
    <!-- filter -->
    <div id="app">{{new Date() | localeDateString}}</div>
    <!-- directive -->
    <div id="app" v-highlight>foo</div>
    <!-- moment.js -->
    <div>{{today}}</div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      greeting: 'hello',
      today: null
    }
  },
  beforeMount(){
    // prototype 1
    this.greeting = this.$bold(this.greeting)
    // prototype 2
    this.today = this.$moment()
  },



}
</script>

