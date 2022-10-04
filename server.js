const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req,res) => {
    
    fs.readFile('index.html', function(err, data) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log('Server is running');
});