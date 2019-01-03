const https = require('https');

https.get('https://www.google.co.kr/', (res) => {
    let body = '';
    res.on('data', (d)=> {
    	body += d;
    });
    res.on('end', ()=>{
    	console.log("###DATA###\n", body);
    });
}).on('error', (e)=>{
    console.log("Error: ", e);
});
