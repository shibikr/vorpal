var vorpal = require('vorpal')();
vorpal
    .delimiter('anjaly$')
    .show();
vorpal
	.command('anjaly', 'Outputs "jijo"')
	.action(function(args, callback) {
	this.log('Anjaly Jijo');
	callback();
	});
