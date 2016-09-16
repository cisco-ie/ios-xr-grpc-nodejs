/*!
 * nodejs ios-xr 6.0.1 grpc connection library
 * cisco-ie
 * Copyright(c) 2016 Cisco Systems
 * Apache v2 Licensed
 */

 'use strict';

/**
 * Module Dependencies
 * @private
 */

var grpc = require('grpc');
var EventEmitter = require('events').EventEmitter;
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
	// Need to figure out how to validate rootCert
	this.params.credentials = rootCert ? grpc.credentials.createSsl(rootCert) : grpc.credentials.createInsecure();
	this.params.metadata = metadata ? this.createMetadata(metadata) : {};
	this.params.options = options ? options : {};
	// Create client objects
	this.xrGrpcClient = new ems_grpc.gRPCConfigOperClient(this.getAddress(), this.params.credentials);
	this.xrGrpcCliClient = new ems_grpc.gRPCExecClient(this.getAddress(), this.params.credentials);
}

/**
 * Utility Functions
 */

/**
 * Stringify collective parameters and clients on toString.
 * @return {Object} Clients and parameters.
 */
xrGrpc.prototype.toString = function xrGrpcToString() {
	var internals = {
		params: this.params,
		client: this.xrGrpcClient,
		cliClient: this.xrGrpcCliClient
	};
	return JSON.stringify(internals);
}

/**
 * Return server network address for client stub communication.
 */
xrGrpc.prototype.getAddress = function() {
	return this.params.address + ':' + this.params.port.toString();
}

/**
 * Change the metadata parameter values.
 * @param {Object} metadata Object in associative array format containing username, password...
 */
xrGrpc.prototype.setMetadata = function(metadata) {
	this.params.metadata = this.createMetadata(metadata);
}

/**
 * Create metadata for gRPC calls.
 * @param {Object} metadata Object in associative array format containing username, password...
 * @return {Object} gRPC Metadata
 */
xrGrpc.prototype.createMetadata = function(metadata) {
	var meta = new grpc.Metadata();
	for (var key in metadata)
		meta.add(key, metadata[key]);
	return meta;
}

/**
 * Message Creation Functions
 * These are for utility, consistency/abstraction in gRPC payload creation.
 */

xrGrpc.prototype.msgs = {};

xrGrpc.prototype.msgs.ConfigArgs = function(reqId, yangJSON) {
	return new ems_grpc_msgs.ConfigArgs([reqId, yangJSON]);
}

xrGrpc.prototype.msgs.ConfigGetArgs = function(reqId, yangPathJSON) {
	return new ems_grpc_msgs.ConfigGetArgs([reqId, yangPathJSON]);
}

xrGrpc.prototype.msgs.CliConfigArgs = function(reqId, cli) {
	return new ems_grpc_msgs.CliConfigArgs([reqId, cli]);
}

xrGrpc.prototype.msgs.CommitReplaceArgs = function(reqId, cli, yangJSON) {
	return new ems_grpc_msgs.CommitReplaceArgs([reqId, cli, yangJSON]);
}

xrGrpc.prototype.msgs.CommitArgs = function(reqId, commitMsg) {
	// This is inverted for some reason.
	return new ems_grpc_msgs.CommitArgs([commitMsg, reqId]);
}

xrGrpc.prototype.msgs.DiscardChangesArgs = function(reqId) {
	return new ems_grpc_msgs.DiscardChangesArgs([reqId]);
}

xrGrpc.prototype.msgs.GetOperArgs = function(reqId, yangPathJSON) {
	return new ems_grpc_msgs.GetOperArgs([reqId, yangPathJSON]);
}

xrGrpc.prototype.msgs.ShowCmdArgs = function(reqId, cli) {
	return new ems_grpc_msgs.ShowCmdArgs([reqId, cli]);
}

/**
 * User Facing Functions
 * What is most intended to be utilized by the user of the library.
 */

/**
 * Return wrapper that emits events for callbacks.
 * Might need to reevaluate if always event driven is best methodology.
 * @param {Object} Error encountered
 * @param {Object} Data returned from RPC
 * @param {boolean} isCallback Whether or not return type is stream or callback.
 * @return {Object} Raw RPC stream if applicable
 */
xrGrpc.prototype.grpcReturnWrapper = function(stream) {
	if (stream != null)
		return stream;
	if (!(this instanceof xrGrpc.prototype.grpcReturnWrapper)) return new this.grpcReturnWrapper(null);
	var parentThis = this;
	this.emitter = new EventEmitter();
	this.callback = function(err, data) {
		if (err)
			parentThis.emitter.emit('error', err);
		if (data) {
			data = data.toObject();
			if (data.errors)
				parentThis.emitter.emit('error', data.errors);
			if (data)
				parentThis.emitter.emit('data', data);
		}
	}
}

/**
 * Retrieves configuration data.
 * @param {int} reqId Ignore.
 * @param {JSON} yangPathJSON Model path in JSON format.
 * @return {Object} Configuration data in JSON format and error string.
 */
xrGrpc.prototype.getConfig = function(reqId, yangPathJSON) {
	var stubCall = this.xrGrpcClient.getConfig(this.msgs.ConfigGetArgs(reqId, yangPathJSON), this.params.metadata, this.params.options);
	return this.grpcReturnWrapper(stubCall);
}

/**
 * Merges configuration data.
 * @param {int} reqId Ignore.
 * @param {JSON} yangJSON Modeled data in JSON format.
 * @return {Object} Error string.
 */
xrGrpc.prototype.mergeConfig = function(reqId, yangJSON) {
	var returnWrapper = this.grpcReturnWrapper(null);
	this.xrGrpcClient.mergeConfig(this.msgs.ConfigArgs(reqId, yangJSON), this.params.metadata, this.params.options, returnWrapper.callback);
	return returnWrapper.emitter;
}

/**
 * Deletes configuration data.
 * @param {int} reqId Ignore.
 * @param {JSON} yangJSON Modeled data in JSON format.
 * @return {Object} Error string.
 */
xrGrpc.prototype.deleteConfig = function(reqId, yangJSON) {
	var returnWrapper = this.grpcReturnWrapper(null);
	this.xrGrpcClient.deleteConfig(this.msgs.ConfigArgs(reqId, yangJSON), this.params.metadata, this.params.options, returnWrapper.callback);
	return returnWrapper.emitter;
}

/**
 * Replaces configuration data.
 * @param {int} reqId Ignore.
 * @param {JSON} yangJSON Modeled data in JSON format.
 * @return {Object} Error string.
 */
xrGrpc.prototype.replaceConfig = function(reqId, yangJSON) {
	var returnWrapper = this.grpcReturnWrapper(null);
	this.xrGrpcClient.replaceConfig(this.msgs.ConfigArgs(reqId, yangJSON), this.params.metadata, this.params.options, returnWrapper.callback);
	return returnWrapper.emitter;
}

/**
 * Merges configuration data.
 * @param {int} reqId Ignore.
 * @param {string} cli CLI configuration.
 * @return {Object} Error string.
 */
xrGrpc.prototype.cliConfig = function(reqId, cli) {
	var returnWrapper = this.grpcReturnWrapper(null);
	this.xrGrpcClient.cliConfig(this.msgs.CliConfigArgs(reqId, cli), this.params.metadata, this.params.options, returnWrapper.callback);
	return returnWrapper.emitter;
}

/**
 * Requires documentation.
 */
xrGrpc.prototype.commitReplace = function(reqId, cli, yangJSON) {
	var returnWrapper = this.grpcReturnWrapper(null);
	this.xrGrpcClient.commitReplace(this.msgs.CommitReplaceArgs(reqId, cli, yangJSON), this.params.metadata, this.params.options, returnWrapper.callback);
	return returnWrapper.emitter;
}

/**
 * Requires documentation.
 */
xrGrpc.prototype.commitConfig = function(reqId, commitMsg) {
	var returnWrapper = this.grpcReturnWrapper(null);
	this.xrGrpcClient.commitConfig(this.msgs.CommitArgs(reqId, commitMsg), this.params.metadata, this.params.options, returnWrapper.callback);
	return returnWrapper.emitter;
}

/**
 * Requires documentation.
 */
xrGrpc.prototype.configDiscardChanges = function(reqId) {
	var returnWrapper = this.grpcReturnWrapper(null);
	this.xrGrpcClient.configDiscardChanges(this.msgs.DiscardChangesArgs(reqId), this.params.metadata, this.params.options, returnWrapper.callback);
	return returnWrapper.emitter;
}

/**
 * Retrieves operational (state) data.
 * @param {int} reqId Ignore.
 * @param {JSON} yangPathJSON Model path in JSON format.
 * @return {Object} Operational (state) data in JSON format and error string.
 */
xrGrpc.prototype.getOper = function(reqId, yangPathJSON) {
	var stubCall = this.xrGrpcClient.getOper(this.msgs.GetOperArgs(reqId, yangPathJSON), this.params.metadata, this.params.options);
	return this.grpcReturnWrapper(stubCall);
}

/**
 * Retrieves show-command output.
 * @param {int} reqId Ignore.
 * @param {string} cli CLI show command.
 * @return {Object} CLI output and error string.
 */
xrGrpc.prototype.showCmdTextOutput = function(reqId, cli) {
	var stubCall = this.xrGrpcCliClient.showCmdTextOutput(this.msgs.ShowCmdArgs(reqId, cli), this.params.metadata, this.params.options);
	return this.grpcReturnWrapper(stubCall);
}

/**
 * Retrieves show-command output.
 * @param {int} reqId Ignore.
 * @param {string} cli CLI show command.
 * @return {Object} CLI output in JSON format and error string.
 */
xrGrpc.prototype.showCmdJSONOutput = function(reqId, cli) {
	var stubCall = this.xrGrpcCliClient.showCmdJSONOutput(this.msgs.ShowCmdArgs(reqId, cli), this.params.metadata, this.params.options);
	return this.grpcReturnWrapper(stubCall);
}

