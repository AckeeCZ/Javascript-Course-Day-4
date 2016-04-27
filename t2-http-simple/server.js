var http = require('http');

// Task: Modify the application so when a request comes on /notes/<note>, 
// new <note> will be added to storage, so it can be seen on /notes endpoint.
// 'notes' Array will be our database for now.
// Bonus Task: Add an REST enpoint, so a DELETE request on /notes/<note> removes a note.

// Request on localhost:8000 greets you, localhost:8000/notes lists currently stored notes. 
// Run the application and use your browser to test it!

var notes = [];

var server = http.createServer( (req, res) => {

	console.log('Incoming Request!', req.method, req.url);

	if (req.url === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.write('<html><body><h1>Hello!</h1></body></html>')
		res.end();
		return;
	}

	if (req.url.match(/^\/notes$/)) {
		console.log('/notes matched with', req.method, 'method');

		if ('GET' === req.method) {
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			res.write(JSON.stringify(notes));
			res.end();
			return;
		}
	}

	res.writeHead(404);
	res.write('Nothing here');
	res.end();
});

server.listen(8000, 'localhost', err => {
	if (err) {
		return console.error(err);
	}
	console.log('Server running on 8000');
});
