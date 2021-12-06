<template>
  <div class="hello">
    <!-- prototype -->
    <div id="app" v-html="greeting"></div>
    <!-- filter -->
    <div id="app">{{new Date() | localeDateString}}</div>
    <!-- directive -->
    <div id="app" v-highlight>foo</div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      greeting: 'hello'
    }
  },
  beforeMount(){
    // prototype
    this.greeting = this.$bold(this.greeting)
  }
}
</script>

