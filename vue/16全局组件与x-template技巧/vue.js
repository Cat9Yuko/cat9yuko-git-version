const app = Vue.createApp({
    template: `<div>
        <hd-xj/>
    </div>`
})
app.component('hd', {
    template: `<h2>Cat9</h2>`
})
app.component('hdXj', {
    template: `<div>
    猫九 - <hd/>
    </div>`
})
app.mount('#app')