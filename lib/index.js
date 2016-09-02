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

/**
 * Constructor for connection library.
 * Need to implement parameter checking.
 * @param {string} address Address of IOS-XR gRPC server.
 * @param {int} port Port of IOS-XR gRPC server.
 * @param {object} rootCert Root SSL certificate. Needs clarification.
 * @param {object} metadata Object in associative array format containing username, password...
 * @param {object} options Object in associative array format containing options. 
 */
function xrGrpc(address, port, rootCert, metadata, options) {
	if (!(this instanceof xrGrpc)) return new xrGrpc(address, port, rootCert, metadata, options);
	// Set parameters
	this.params = {};
	this.params.address = address;
	if (!(port = parseInt(port)))
		throw { name: 'BadPort', message: 'Port is not a number.' };
	this.params.port = port;
	this.params.credentials = rootCert ? grpc.credentials.createSsl(rootCert) : grpc.credentials.createInsecure();
	this.params.metadata = metadata ? this.createMetadata(metadata) : {};
	this.params.options = options ? options : {};
	// Create client objects
	this.xrGrpcClient = new ems_grpc.gRPCConfigOperClient(this.getAddress(), this.params.credentials);
	this.xrGrpcCliClient = new ems_grpc.gRPCExecClient(this.getAddress(), this.params.credentials);
}

/**
 * Return the client parameters 
 */
xrGrpc.prototype.toString = function xrGrpcToString() {
	return JSON.stringify(this.params);
}

xrGrpc.prototype.getAddress = function() {
	return this.params.address + ':' + this.params.port.toString();
}

/**
 * Change the params metadata values.
 * @param {object} metadata Object in associative array format containing username, password...
 */
xrGrpc.prototype.setMetadata = function(metadata) {
	this.params.metadata = this.createMetadata(metadata);
}

/**
 * Create metadata for gRPC calls.
 * @param {object} metadata Object in associative array format containing username, password...
 */
xrGrpc.prototype.createMetadata = function(metadata) {
	var meta = new grpc.Metadata();
	for (var key in metadata)
		meta.add(key, metadata[key]);
	return meta;
}

xrGrpc.prototype.createConfigArgs = function(reqId, yangJSON) {
	return new ems_grpc_msgs.ConfigArgs([reqId, yangJSON]);
}

xrGrpc.prototype.createConfigGetArgs = function(reqId, yangPathJSON) {
	return new ems_grpc_msgs.ConfigGetArgs([reqId, yangPathJSON]);
}

/**
 * Get the confg for the specfied YANG path.
 * @param {int} reqId Ignore.
 * @param {string} yangPathJSON YANG path to retrieve config from.
 * @param {function} callback Callback to return data to.
 * @return getConfig wuuuut
 */
xrGrpc.prototype.getConfig = function(reqId, yangPathJSON) {
	return this.xrGrpcClient.getConfig(this.createConfigGetArgs(reqId, yangPathJSON), this.params.metadata, this.params.options);
}

xrGrpc.prototype.mergeConfig = function(reqId, yangJSON) {
	return this.xrGrpcClient.getConfig(this.createConfigArgs(reqId, yangJSON), this.params.metadata, this.params.options);
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

