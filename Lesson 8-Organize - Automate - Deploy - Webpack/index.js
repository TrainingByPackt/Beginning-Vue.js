import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import Counter from './Counter.vue'
new Vue({
  el: '#app',
  components: { App, Counter },
  template: `
  <div>
    <App/>
    <Counter/>
  </div>`
})
