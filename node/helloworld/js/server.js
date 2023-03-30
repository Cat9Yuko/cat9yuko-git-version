 /*jshint esversion: 6 */
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write('<head><meta charset="UTF-8"></head>');
    res.end('你好世界\n');
});
server.listen(port,hostname,()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
});