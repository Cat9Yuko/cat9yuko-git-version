const app = Vue.createApp({
    data(){
        return {
            name:'cat9',
            html:`<div style="color:red;" onclick="alert('cat9')">
                cat9.com
                </div>`
            }
    }
})
const vm = app.mount('#app')

setTimeout(() => {
    vm.$data.name = 'cat10'
}, 3000);