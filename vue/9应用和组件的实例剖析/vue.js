const app = Vue.createApp({
    data() {
        return {
            name: '根组件-父亲',
        }
    },
    template: `<div>{{name}}<cat/></div>`
})
app.component('cat',{
    data() {
        return {
            name:'猫',
        }
    },
    template:  `<h2 style="background-color: red;color: white">{{name}}</h2>`,
})
const vm = app.mount('#app')
console.log(vm);