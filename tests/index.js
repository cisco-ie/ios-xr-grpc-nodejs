/**
 * Basic validation tests showing that methods are functional.
 * Depends on IOS-XRv and supplied Vagrant configuration.
 * Accessible via /xrgrpc/tests/
 * ~/.npm_global/bin/mocha index.js
 */

var assert = require('assert');
var xrGrpc = require('../lib/index.js');

var xrAddress = '11.1.1.254';
var xrPort = 57500;
var xrMetadata = {
	username: 'vagrant',
	password: 'vagrant'
};

function main() {
	// Utility Method Testing
	testSetup();
	testToString();
	testGetAddress();
	testSetMetadata();
	testCreateMetadata();
	// Message Method Testing
	testMsgConfigArgs();
	testMsgConfigGetArgs();
	testMsgCliConfigArgs();
	testMsgCommitReplaceArgs();
	testMsgCommitArgs();
	testMsgDiscardChangesArgs();
	testMsgGetOperArgs();
	testMsgShowCmdArgs();
	// Service Testing
	testGetConfig();
	testMergeConfig();
	testDeleteConfig();
	testReplaceConfig();
	/** Uncertain on implementation
	testCliConfig();
	testCommitReplace();
	testCommitConfig();
	testConfigDiscardChanges();
	*/
	testGetOper();
	testShowCmdTextOutput();
	testShowCmdJSONOutput();
}

function defaultInstance() {
	return new xrGrpc(xrAddress, xrPort, null, xrMetadata, null);
}

function testSetup() {
	describe('index.js', function() {
		describe('#xrGrpc()', function() {
			it('should create a new instance', function() {
				var testGrpc = defaultInstance();
				assert(xrAddress, testGrpc.params.address);
				assert(xrPort, testGrpc.params.port);
				assert(!undefined, testGrpc.params.credentials);
				assert(xrMetadata, testGrpc.params.metadata);
				assert({}, testGrpc.params.options);
				assert(!undefined, testGrpc.xrGrpcClient);
				assert(!undefined, testGrpc.xrGrpcCliClient);
			});
		});
	});
}

function testToString() {
	describe('index.js', function() {
		describe('#toString()', function() {
			it('should return stringified parameters and clients.', function() {
				console.log('Not yet implemented.');
				var testGrpc = defaultInstance();
				console.log(testGrpc);
				assert(true, true);
			});
		});
	});
}

function testGetAddress() {
	describe('index.js', function() {
		describe('#getAddress()', function() {
			it('should return the address param for clients.', function() {
				var testGrpc = defaultInstance();
				assert(xrAddress + ':' + xrPort, testGrpc.getAddress());
			});
		});
	});
}

function testSetMetadata() {
	describe('index.js', function() {
		describe('#setMetadata()', function() {
			it('should change metadata.', function() {
				var testGrpc = defaultInstance();
				assert(xrMetadata.username, testGrpc.params.metadata.get('username'));
				assert(xrMetadata.password, testGrpc.params.metadata.get('password'));
				var newMetadata = {
					username: 'iam',
					password: 'datnewnew'
				};
				testGrpc.setMetadata(newMetadata);
				assert(newMetadata.username, testGrpc.params.metadata.get('username'));
				assert(newMetadata.password, testGrpc.params.metadata.get('password'));
			});
		});
	});
}

function testCreateMetadata() {
	describe('index.js', function() {
		describe('#createMetadata()', function() {
			it('should create and return the metadata object.', function() {
				var testGrpc = defaultInstance();
				var metaMeta = testGrpc.createMetadata(xrMetadata);
				assert(xrMetadata.username, metaMeta.get('username'));
				assert(xrMetadata.password, metaMeta.get('password'));
			});
		});
	});
}

function testMsgConfigArgs() {
	describe('index.js', function() {
		describe('#msgs.ConfigArgs()', function() {
			it('should return a ConfigArgs object.', function() {
				var testParams = {
					reqId: 0,
					yangJSON: 'test'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.ConfigArgs(testParams.reqId, testParams.yangJSON);
				var index = 0;
				for (var key in testParams) {
					assert(true, testParams[key] == testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgConfigGetArgs() {
	describe('index.js', function() {
		describe('#msgs.ConfigGetArgs()', function() {
			it('should return a ConfigGetArgs object.', function() {
				var testParams = {
					reqId: 0,
					yangPathJSON: 'test'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.ConfigGetArgs(testParams.reqId, testParams.yangPathJSON);
				var index = 0;
				for (var key in testParams) {
					assert(true, testParams[key] == testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgCliConfigArgs() {
	describe('index.js', function() {
		describe('#msgs.CliConfigArgs()', function() {
			it('should return a CliConfigArgs object.', function() {
				var testParams = {
					reqId: 0,
					cli: 'test'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.CliConfigArgs(testParams.reqId, testParams.cli);
				var index = 0;
				for (var key in testParams) {
					assert(true, testParams[key] == testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgCommitReplaceArgs() {
	describe('index.js', function() {
		describe('#msgs.CommitReplaceArgs()', function() {
			it('should return a CommitReplaceArgs object.', function() {
				var testParams = {
					reqId: 0,
					cli: 'test',
					yangJSON: 'test1'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.CommitReplaceArgs(testParams.reqId, testParams.cli, testParams.yangJSON);
				var index = 0;
				for (var key in testParams) {
					assert(true, testParams[key] == testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgCommitArgs() {
	describe('index.js', function() {
		describe('#msgs.CommitArgs()', function() {
			it('should return a CommitArgs object.', function() {
				var testParams = {
					commitMsg: 'test',
					reqId: 0
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.CommitArgs(testParams.reqId, testParams.commitMsg);
				var index = 0;
				for (var key in testParams) {
					assert(true, testParams[key] == testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgDiscardChangesArgs() {
	describe('index.js', function() {
		describe('#msgs.DiscardChangesArgs()', function() {
			it('should return a DiscardChangesArgs object.', function() {
				var testParams = {
					reqId: 0,
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.DiscardChangesArgs(testParams.reqId);
				var index = 0;
				for (var key in testParams) {
					assert(true, testParams[key] == testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgGetOperArgs() {
	describe('index.js', function() {
		describe('#msgs.GetOperArgs()', function() {
			it('should return a GetOperArgs object.', function() {
				var testParams = {
					reqId: 0,
					yangPathJSON: 'test'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.GetOperArgs(testParams.reqId, testParams.yangPathJSON);
				var index = 0;
				for (var key in testParams) {
					assert(true, testParams[key] == testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgShowCmdArgs() {
	describe('index.js', function() {
		describe('#msgs.ShowCmdArgs()', function() {
			it('should return a ShowCmdArgs object.', function() {
				var testParams = {
					reqId: 0,
					cli: 'test'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.ShowCmdArgs(testParams.reqId, testParams.cli);
				var index = 0;
				for (var key in testParams) {
					assert(true, testParams[key] == testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testGetConfig() {
	describe('index.js', function() {
		describe('#getConfig()', function() {
			it('should get the config of the YANG path.', function(done) {
				var testYANGPath = '{"Cisco-IOS-XR-ip-static-cfg:router-static": [null]}';				
				var testGrpc = defaultInstance();
				var testRequest = testGrpc.getConfig(0, testYANGPath);
				testRequest.on('data', function(data) {
					data = data.toObject();
					if (data.errors) {
						assert(true, false);
						// Not really certain how to properly do this.
						done(data.errors);
					} else {
						assert(true, true);
						done();
					}
				});
			});
		});
	});
}

function testMergeConfig() {
	describe('index.js', function() {
		describe('#mergeConfig()', function() {
			it('should merge configuration data.', function(done) {
				var testGrpc = defaultInstance();
				var testYANG = '{"Cisco-IOS-XR-ip-static-cfg:router-static": {"default-vrf": {"address-family": {"vrfipv4": {"vrf-unicast": {"vrf-prefixes": {"vrf-prefix": [{"prefix": "1.2.3.6", "vrf-route": {"vrf-next-hop-table": {"vrf-next-hop-next-hop-address": [{"next-hop-address": "10.0.2.2"}]}}, "prefix-length": 32}]}}}}}}}';
				var testRequest = testGrpc.mergeConfig(0, testYANG);
				testRequest.on('error', function(error) {
					if (error) {
						assert(true, false);
						done(error);
					} else {
						assert(true, true);
						done();
					}
				});
				testRequest.on('data', function(data) {
					if (data.errors) {
						assert(true, false);
						done(data.errors);
					} else {
						assert(true, true);
						done();
					}
				});
			});
		});
	});
}

function testDeleteConfig() {
	describe('index.js', function() {
		describe('#deleteConfig()', function() {
			it('should delete configuration data.', function(done) {
				var testGrpc = defaultInstance();
				var testYANG = '{"Cisco-IOS-XR-ip-static-cfg:router-static": {"default-vrf": {"address-family": {"vrfipv4": {"vrf-unicast": {"vrf-prefixes": {"vrf-prefix": [{"prefix": "1.2.3.6", "vrf-route": {"vrf-next-hop-table": {"vrf-next-hop-next-hop-address": [{"next-hop-address": "10.0.2.2"}]}}, "prefix-length": 32}]}}}}}}}';
				var testRequest = testGrpc.deleteConfig(0, testYANG);
				testRequest.on('error', function(error) {
					if (error) {
						assert(true, false);
						done(error);
					} else {
						assert(true, true);
						done();
					}
				});
				testRequest.on('data', function(data) {
					if (data.errors) {
						assert(true, false);
						done(data.errors);
					} else {
						assert(true, true);
						done();
					}
				});
			});
		});
	});
}

function testReplaceConfig() {
	describe('index.js', function() {
		describe('#replaceConfig()', function() {
			it('should replace configuration data.', function(done) {
				var testGrpc = defaultInstance();
				var testYANG = '{"Cisco-IOS-XR-ip-static-cfg:router-static": {"default-vrf": {"address-family": {"vrfipv4": {"vrf-unicast": {"vrf-prefixes": {"vrf-prefix": [{"prefix": "0.0.0.0", "vrf-route": {"vrf-next-hop-table": {"vrf-next-hop-next-hop-address": [{"next-hop-address": "10.0.2.2"}]}}, "prefix-length": 0}, {"prefix": "1.2.3.5", "vrf-route": {"vrf-next-hop-table": {"vrf-next-hop-next-hop-address": [{"next-hop-address": "10.0.2.2"}]}}, "prefix-length": 32}]}}}}}}}';
				var testRequest = testGrpc.replaceConfig(0, testYANG);
				testRequest.on('error', function(error) {
					if (error) {
						assert(true, false);
						done(error);
					} else {
						assert(true, true);
						done();
					}
				});
				testRequest.on('data', function(data) {
					if (data.errors) {
						assert(true, false);
						done(data.errors);
					} else {
						assert(true, true);
						done();
					}
				});
			});
		});
	});
}

// Uncertain on implementation details
function testCliConfig() {}
function testCommitReplace() {}
function testCommitConfig() {}
function testConfigDiscardChanges() {}

function testGetOper() {
	describe('index.js', function() {
		describe('#getOper()', function() {
			it('should get operational data.', function(done) {
				var testGrpc = defaultInstance();
				var testYANGPath = '{"Cisco-IOS-XR-cdp-oper:cdp": [null]}';
				var testRequest = testGrpc.getOper(0, testYANGPath);
				testRequest.on('data', function(data) {
					data = data.toObject();
					if (data.errors) {
						assert(true, false);
						// Not really certain how to properly do this.
						done(data.errors);
					} else {
						assert(true, true);
						done();
					}
				});
			});
		});
	});
}

function testShowCmdTextOutput() {
	describe('index.js', function() {
		describe('#showCmdTextOutput()', function() {
			it('should return CLI config result in text format.', function(done) {
				var testGrpc = defaultInstance();
				var testCli = 'show bgp neighbors';
				var testRequest = testGrpc.showCmdTextOutput(0, testCli);
				var accomplished = false;
				testRequest.on('error', function(error) {
					if (error) {
						assert(true, false);
						done(error);
					}
				});
				testRequest.on('data', function(data) {
					if (!data.errors) {
						assert(true, true);
						if (!accomplished) {
							accomplished = true;
							done();
						}
					}
				});
			});
		});
	});
}

function testShowCmdJSONOutput() {
	describe('index.js', function() {
		describe('#showCmdJSONOutput()', function() {
			it('should return CLI config result in JSON format.', function(done) {
				var testGrpc = defaultInstance();
				var testCli = 'show bgp neighbors';
				var testRequest = testGrpc.showCmdJSONOutput(0, testCli);
				var accomplished = false;
				testRequest.on('error', function(error) {
					if (error) {
						assert(true, false);
						done(error);
					}
				});
				testRequest.on('data', function(data) {
					if (!data.errors) {
						assert(true, true);
						if (!accomplished) {
							accomplished = true;
							done();
						}
					}
				});
			});
		});
	});
}



main();