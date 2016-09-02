var xrGrpc = require('../../lib/index.js');

function main() {
	var metadata = {
		username: 'vagrant',
		password: 'vagrant'
	};
	//var yangpath = '{"Cisco-IOS-XR-infra-statsd-oper": [null]}';
	var yangpath = '{"Cisco-IOS-XR-ip-static-cfg:router-static": [null]}';
	var client = xrGrpc('11.1.1.254', 57500, null, metadata, null);
	var stream = client.getConfig(0, yangpath, null);

	stream.on('data', function(data) {
		data = data.toObject();
		if (data.errors) {
			console.log(data.errors);
		} else {
			console.log(data.yangjson);
		}
	});

	stream.on('end', function() {
		console.log('Server has ended stream.');
	});

	stream.on('status', function(status) {
		console.log('Status changed to ' + status.code);
		if (status.details == '')
			console.log('No details.');
		else
			console.log(status.details);
	});
}

main();