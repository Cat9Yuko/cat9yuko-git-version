const app = Vue.createApp({
    data() {
        return {
            name: 'cat9',
            num: 1,
            tip: '',
        }
    },
    watch: {
        num(newValue, oldValue) {
            console.log(newValue, oldValue);
            this.error = newValue == 0 ? '不能小于0' : newValue == 10 ? '不能超过10' : ''
        }
    },
    methods: {
        add(event) {
            this.error = '提示：'
            if (this.num < 10) this.num++
        },
        desc(event) {
            this.error = '警告：'
            if (this.num > 0) this.num--
        }
    }
})

app.mount('#app')