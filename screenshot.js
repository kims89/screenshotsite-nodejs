const Pageres = require('pageres');

const pageres = new Pageres({delay: 2})
	.src('vg.no', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
	.src('dagbladet.no', ['1280x1024', '1920x1080'])
	.src('data:text/html;base64,PGgxPkZPTzwvaDE+', ['1024x768'])
	.dest(__dirname)
	.run()
	.then(() => console.log('done'));
