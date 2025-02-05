export default () => ({
  // 封装 fetch 网络请求
  async request(url = "", options = { method: "get" }) {
    return await fetch(`http://127.0.0.1:3002/news/${url}`, options).then((r) =>
      r.json()
    );
  },
  async get(url) {
    return this.request(url);
  },
  async delete(url) {
    return await this.request(url, { method: "delete" });
  },
  async post(data) {
    return await this.request('', {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
  },
});
