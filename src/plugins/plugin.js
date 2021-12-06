import moment from 'moment'

export default{
  install (Vue, options) {
    Vue.mixin({
      created(){
        const { greeting } = options
        console.log(greeting)
      }
    }),

    Vue.prototype.$bold = text =>{
      return `<b>${text}</b>`
    }

    Vue.prototype.$moment = moment
  
    Vue.filter('localeDateString', value =>{
      if (!(value instanceof Date)) {
        return value;
      }
      return value.toLocaleDateString();
    })

    Vue.directive('highlight',{
      inserted(el){
        el.style.color = 'red'
      }
    })
  
  }
}