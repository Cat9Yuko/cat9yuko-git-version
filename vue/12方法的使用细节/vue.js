const app = Vue.createApp({
    data() {
        return {
            name: 'cat9',
            // event: 'mouseenter'
            num: 1,
            error: ''
        }
    },
    methods: {
        add(event) {
            // alert(3)
            this.error = ''
            if (this.num < 10) {
                this.num++
            } else {
                this.error = '不能超过10'
            }
        },
        des(event){
            this.error= ''
            if(this.num>0) {
                this.num--
            } else {
                this.error = '不能小于0'
            }
        },
        go(event, title) {
            // event.preventDefault()
            alert(title)
        }
    },
})

const vm = app.mount('#app')