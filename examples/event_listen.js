/**
 * Simple/quick example of merge then deletion of configuration.
 * Show configuration before/after each step.
 * Meant to be used from test environment from /xrgrpc/examples/
 */

var xrGrpc = require('../lib/index.js');

function main() {

	var metadata = {
		username: 'vagrant',
		password: 'vagrant'
	};
	var yangpath = '{"Cisco-IOS-XR-ip-static-cfg:router-static": [null]}';
	var client = xrGrpc('11.1.1.254', 57500, null, metadata, null);

	console.log('\n\nORIGINAL CONFIG\n\n');
	showGetConfig(client, yangpath);
	
	setTimeout(function() {
		console.log('\n\nMERGING STATIC ROUTES IN\n\n');
		mergeConfig(client, '{"Cisco-IOS-XR-ip-static-cfg:router-static": {"default-vrf": {"address-family": {"vrfipv4": {"vrf-unicast": {"vrf-prefixes": {"vrf-prefix": [{"prefix": "1.2.3.6", "vrf-route": {"vrf-next-hop-table": {"vrf-next-hop-next-hop-address": [{"next-hop-address": "10.0.2.2"}]}}, "prefix-length": 32}]}}}}}}}');
	}, 1000);

	setTimeout(function() {
		console.log('\n\nNEW CONFIG\n\n');
		showGetConfig(client, yangpath);
	}, 2000);

	setTimeout(function() {
		console.log('\n\nDELETING STATIC ROUTES\n\n');
		deleteConfig(client, '{"Cisco-IOS-XR-ip-static-cfg:router-static": {"default-vrf": {"address-family": {"vrfipv4": {"vrf-unicast": {"vrf-prefixes": {"vrf-prefix": [{"prefix": "1.2.3.6", "vrf-route": {"vrf-next-hop-table": {"vrf-next-hop-next-hop-address": [{"next-hop-address": "10.0.2.2"}]}}, "prefix-length": 32}]}}}}}}}');
	}, 3000);

	setTimeout(function() {
		console.log('\n\nFINAL CONFIG\n\n');
		showGetConfig(client, yangpath);
	}, 4000);
}

function showGetConfig(client, yangpath) {
	var stream = client.getConfig(0, yangpath);

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

function deleteConfig(client, yangJSON) {
	var command = client.deleteConfig(0, yangJSON);
	command.on('data', function(data) {
		console.log(data);
	});
	command.on('error', function(err) {
		console.log(err);
	});
}

function mergeConfig(client, yangJSON) {
	var command = client.mergeConfig(0, yangJSON);
	command.on('data', function(data) {
		console.log(data);
	});
	command.on('error', function(err) {
		console.log(err);
	});
}

main();