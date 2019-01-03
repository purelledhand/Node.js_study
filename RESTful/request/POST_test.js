const qs = require('querystring');
const http = require('http');

const post_data = qs.stringify({
    'key1': 'val1',
    'key2': 'val2'
});

const post_options = {
    host: 'ptsv2.com',
    port: '80',
    path: '/t/test/post',
    method: 'POST',
    headers: {
        'Content-Type': 'applications/x-www-form-urlencoded',
	'Content-Length': post_data.length
    }
};

const post_req = http.request(post_options, (res)=>{
    res.setEncoding('utf8');
    res.on('data', (chunk)=>{
    	console.log('###Response###\n'+chunk);
    });
});

console.log('###POST DATA###\n',post_data.length, post_data);

post_req.write(post_data);
post_req.end();
