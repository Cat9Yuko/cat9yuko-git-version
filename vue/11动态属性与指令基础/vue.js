const app = Vue.createApp({
    data() {
        return {
            name: 'cat9',
            value: 'catid',
            n: 2,
            arg: 'id'
            // id: null
            // id: undefined
        }
    }
})

const vm = app.mount('#app')

setTimeout(() => {
    // vm.id = 'cat9.com'
    // vm.name = 'change-cat'
    vm.arg = 'href'
    vm.value = 'http://www.baidu.com'
}, 2000);