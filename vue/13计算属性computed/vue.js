const app = Vue.createApp({
    data() {
        return {
            name: 'cat9',
            num: 1,
            tip:'',
        }
    },
    computed: {
        error: {
            get() {
                const message = this.num == 0 ? '不能小于0' : this.num == 10 ? '不能大于10' : ''
                if (message) return this.tip + message
            },
            set(tip) {
                this.tip = tip
            }
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