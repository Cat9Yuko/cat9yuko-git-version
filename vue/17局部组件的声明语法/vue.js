

const todo = {
    data() {
        return {title: 'cat9'}
    },
    template: `<div>
        {{title}}
    </div>` 
}
const app = Vue.createApp({
    components: {cat: todo}
})
app.mount('#app')