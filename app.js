const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const data = fs.readFileSync('D:/Dipanshu Joshi 2111/04-06-2022/HomePageVersion2.html')
       
    res.end(data);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('server is listening');
});