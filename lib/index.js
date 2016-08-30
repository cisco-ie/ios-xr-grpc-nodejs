/*!
 * nodejs ios-xr grpc connection library
 * Copyright(c) 2016 Cisco Systems
 * Apache v2 Licensed
 */

 'use strict';

/**
 * Module Dependencies
 * @private
 */

var grpc = require('grpc');
var ems_grpc = require(__dirname + '/proto/ems_grpc_grpc_pb.js');
var ems_grpc_msgs = require(__dirname + '/proto/ems_grpc_pb.js');

/**
 * Module Exports
 * @public
 */

module.exports = xrGrpc;

/**
 * Module Source
 * @private
 */

function xrGrpc(address, port, credentials, metadata, options) {
	if (!(this instanceof xrGrpc)) return new xrGrpc(address, port, credentials, username, password);
	
	this.address = server;
	this.port = port.toString();
	// Just default to insecure right now, fix in the future.
	this.credentials = grpc.credentials.createInsecure();
	// Set default parameters
	this.default = {};
	this.default.metadata = this.createMetadata(metadata);
	this.default.options = options;
	// Create client object
	this.xrGrpcClient = new ems_grpc.gRPCConfigOperClient(this.getAddress(), this.credentials);
	this.xrGrpcCliClient = new ems_grpc.gRPCExecClient(this.getAddress(), this.credentials);
}

xrGrpc.prototype.getAddress = function() {
	return this.serverAddress + ':' + this.serverPort.toString();
}

/**
 * Change the default metadata values.
 */
xrGrpc.prototype.setMetadata = function(metadata) {
	this.default.metadata = this.createMetadata(metadata);
}

/**
 * Create metadata for gRPC calls.
 * Accepts an "associative array" to translate into metadata.
 */
xrGrpc.prototype.createMetadata = function(metadata) {
	var meta = new grpc.Metadata();
	for (var key in metadata)
		meta.add(key, metadata[key]);
	return meta;
}

xrGrpc.prototype.getConfig = function() {

}

xrGrpc.prototype.mergeConfig = function() {

}

xrGrpc.prototype.deleteConfig = function() {

}

xrGrpc.prototype.replaceConfig = function() {

}

xrGrpc.prototype.cliConfig = function() {

}

xrGrpc.prototype.commitReplace = function() {

}

xrGrpc.prototype.commitConfig = function() {

}

xrGrpc.prototype.configDiscardChanges = function() {

}

xrGrpc.prototype.getOper = function() {

}

xrGrpc.prototype.showCmdTextOutput = function() {

}

xrGrpc.prototype.showCmdJSONOutput = function() {

}

