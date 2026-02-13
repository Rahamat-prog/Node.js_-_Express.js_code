// Server create with HTPP module 

// const { error } = require('console');
// const http = require('http');
// const { json } = require('stream/consumers');

// const PORT = 3000
// const HOSTNAME = 'localhost';

// const server = http.createServer((req, res) =>{
//     res.statusCode = 500;
//     res.setHeader('content-Type', "application/json")
//     res.end(JSON.stringify({error: "server error"}));
// })

// server.listen(PORT, ()=>{
//     console.log(`server running at ${HOSTNAME}: ${PORT}`);
// })



// server create with the help of node.js 

const { error } = require('console');
const http = require('http');
const https = require('https');
const { json } = require('stream/consumers');

const PORT = 4001;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end('welcome to Node.js server, created by Rahamat');
    }
    else if(req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end('This is about page');
    }
    else if(req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end('This is contact page');
    }
    else if(req.url === '/product') {  // here fetch the data from our server to the different 3rd party server and show in our client
        // res.statusCode = 200;
        // res.setHeader('content-type', 'application/json');
        // res.end(JSON.stringify({productName: "product 1"}));

        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }
        
        const apiReq = https.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.end(data.toString());
            })
        });
        
        apiReq.on("error", (e) => {
            console.log(e);
        });
        
        apiReq.end();
    }
    else {
        res.statusCode = 500;
        res.setHeader('content-type', 'application/json')
        res.end('server error!');
    }
})


server.listen(PORT, ()=>{
    console.log(`server running at ${HOSTNAME}: ${PORT}`);
})

