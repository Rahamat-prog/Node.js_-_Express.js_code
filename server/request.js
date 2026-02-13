

const https = require('https');


const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
}

const apiReq = https.request(options, (apiRes) => {
    apiRes.on("data", (data) => {
        console.log(JSON.parse(data));
    })
});

apiReq.on("error", (e) => {
    console.log(e);
});

apiReq.end();