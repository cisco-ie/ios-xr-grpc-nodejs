var xrGrpc = require('../lib/index.js');

function main() {

	var metadata = {
		username: 'vagrant',
		password: 'vagrant'
	};
	var client = xrGrpc('11.1.1.254', 57500, null, metadata, null);
	var subscription = client.createSubscription(0, null, '1');

	subscription.on('error', function(error) {
		console.log(error);
	});

	subscription.on('data', function(telemetry) {
		console.log(JSON.stringify(telemetry));
	});

	subscription.on('end', function() {
		console.log('Server has ended stream.');
	});

	subscription.on('status', function(status) {
		console.log('Status changed to ' + status.code);
		if (status.details == '')
			console.log('No details.');
		else
			console.log(status.details);
	});
}

main();