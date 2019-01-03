const http = require('http');

const server = http.createServer((req, res) => {
	let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	/**
	* Systems that passed by proxy include host's real IP in header using header key 'x-forwoard-for'.
	* also public CDN, AWS, GCP, Nginx and so on either.
	*/

	console.log('ip: ', ip);
	console.log('url: ', req.url);
	console.log('headers: ', req.headers);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end(JSON.stringify(req.headers, null, 4));
});

server.listen(80, (err) => {
	if(err) console.log(err);
	console.log('Server Running!');
});
