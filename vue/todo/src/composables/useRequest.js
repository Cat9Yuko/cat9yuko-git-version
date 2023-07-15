export default () => ({
    async request(url = '', options = {
        method: 'get'
    }) {
        return await fetch(`http://127.0.0.1:3002/news/${url}`,options).then(r => r.json())
    },
    async get(url) {
        return await this.request(url)
    },
    async delete(url) {
        return await this.request(url, {
            method: 'delete'
        })
    }
})