// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ems_grpc_pb = require('./ems_grpc_pb.js');

function serialize_CliConfigArgs(arg) {
  if (!(arg instanceof ems_grpc_pb.CliConfigArgs)) {
    throw new Error('Expected argument of type CliConfigArgs');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CliConfigArgs(buffer_arg) {
  return ems_grpc_pb.CliConfigArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CliConfigReply(arg) {
  if (!(arg instanceof ems_grpc_pb.CliConfigReply)) {
    throw new Error('Expected argument of type CliConfigReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CliConfigReply(buffer_arg) {
  return ems_grpc_pb.CliConfigReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CommitArgs(arg) {
  if (!(arg instanceof ems_grpc_pb.CommitArgs)) {
    throw new Error('Expected argument of type CommitArgs');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CommitArgs(buffer_arg) {
  return ems_grpc_pb.CommitArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CommitReplaceArgs(arg) {
  if (!(arg instanceof ems_grpc_pb.CommitReplaceArgs)) {
    throw new Error('Expected argument of type CommitReplaceArgs');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CommitReplaceArgs(buffer_arg) {
  return ems_grpc_pb.CommitReplaceArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CommitReplaceReply(arg) {
  if (!(arg instanceof ems_grpc_pb.CommitReplaceReply)) {
    throw new Error('Expected argument of type CommitReplaceReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CommitReplaceReply(buffer_arg) {
  return ems_grpc_pb.CommitReplaceReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CommitReply(arg) {
  if (!(arg instanceof ems_grpc_pb.CommitReply)) {
    throw new Error('Expected argument of type CommitReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CommitReply(buffer_arg) {
  return ems_grpc_pb.CommitReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ConfigArgs(arg) {
  if (!(arg instanceof ems_grpc_pb.ConfigArgs)) {
    throw new Error('Expected argument of type ConfigArgs');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ConfigArgs(buffer_arg) {
  return ems_grpc_pb.ConfigArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ConfigGetArgs(arg) {
  if (!(arg instanceof ems_grpc_pb.ConfigGetArgs)) {
    throw new Error('Expected argument of type ConfigGetArgs');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ConfigGetArgs(buffer_arg) {
  return ems_grpc_pb.ConfigGetArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ConfigGetReply(arg) {
  if (!(arg instanceof ems_grpc_pb.ConfigGetReply)) {
    throw new Error('Expected argument of type ConfigGetReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ConfigGetReply(buffer_arg) {
  return ems_grpc_pb.ConfigGetReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ConfigReply(arg) {
  if (!(arg instanceof ems_grpc_pb.ConfigReply)) {
    throw new Error('Expected argument of type ConfigReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ConfigReply(buffer_arg) {
  return ems_grpc_pb.ConfigReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateSubsArgs(arg) {
  if (!(arg instanceof ems_grpc_pb.CreateSubsArgs)) {
    throw new Error('Expected argument of type CreateSubsArgs');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CreateSubsArgs(buffer_arg) {
  return ems_grpc_pb.CreateSubsArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateSubsReply(arg) {
  if (!(arg instanceof ems_grpc_pb.CreateSubsReply)) {
    throw new Error('Expected argument of type CreateSubsReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CreateSubsReply(buffer_arg) {
  return ems_grpc_pb.CreateSubsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiscardChangesArgs(arg) {
  if (!(arg instanceof ems_grpc_pb.DiscardChangesArgs)) {
    throw new Error('Expected argument of type DiscardChangesArgs');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_DiscardChangesArgs(buffer_arg) {
  return ems_grpc_pb.DiscardChangesArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiscardChangesReply(arg) {
  if (!(arg instanceof ems_grpc_pb.DiscardChangesReply)) {
    throw new Error('Expected argument of type DiscardChangesReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_DiscardChangesReply(buffer_arg) {
  return ems_grpc_pb.DiscardChangesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetOperArgs(arg) {
  if (!(arg instanceof ems_grpc_pb.GetOperArgs)) {
    throw new Error('Expected argument of type GetOperArgs');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GetOperArgs(buffer_arg) {
  return ems_grpc_pb.GetOperArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetOperReply(arg) {
  if (!(arg instanceof ems_grpc_pb.GetOperReply)) {
    throw new Error('Expected argument of type GetOperReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GetOperReply(buffer_arg) {
  return ems_grpc_pb.GetOperReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ShowCmdArgs(arg) {
  if (!(arg instanceof ems_grpc_pb.ShowCmdArgs)) {
    throw new Error('Expected argument of type ShowCmdArgs');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ShowCmdArgs(buffer_arg) {
  return ems_grpc_pb.ShowCmdArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ShowCmdJSONReply(arg) {
  if (!(arg instanceof ems_grpc_pb.ShowCmdJSONReply)) {
    throw new Error('Expected argument of type ShowCmdJSONReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ShowCmdJSONReply(buffer_arg) {
  return ems_grpc_pb.ShowCmdJSONReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ShowCmdTextReply(arg) {
  if (!(arg instanceof ems_grpc_pb.ShowCmdTextReply)) {
    throw new Error('Expected argument of type ShowCmdTextReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ShowCmdTextReply(buffer_arg) {
  return ems_grpc_pb.ShowCmdTextReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var gRPCConfigOperService = exports.gRPCConfigOperService = {
  // Configuration related commands
  //
  getConfig: {
    path: '/IOSXRExtensibleManagabilityService.gRPCConfigOper/GetConfig',
    requestStream: false,
    responseStream: true,
    requestType: ems_grpc_pb.ConfigGetArgs,
    responseType: ems_grpc_pb.ConfigGetReply,
    requestSerialize: serialize_ConfigGetArgs,
    requestDeserialize: deserialize_ConfigGetArgs,
    responseSerialize: serialize_ConfigGetReply,
    responseDeserialize: deserialize_ConfigGetReply,
  },
  mergeConfig: {
    path: '/IOSXRExtensibleManagabilityService.gRPCConfigOper/MergeConfig',
    requestStream: false,
    responseStream: false,
    requestType: ems_grpc_pb.ConfigArgs,
    responseType: ems_grpc_pb.ConfigReply,
    requestSerialize: serialize_ConfigArgs,
    requestDeserialize: deserialize_ConfigArgs,
    responseSerialize: serialize_ConfigReply,
    responseDeserialize: deserialize_ConfigReply,
  },
  deleteConfig: {
    path: '/IOSXRExtensibleManagabilityService.gRPCConfigOper/DeleteConfig',
    requestStream: false,
    responseStream: false,
    requestType: ems_grpc_pb.ConfigArgs,
    responseType: ems_grpc_pb.ConfigReply,
    requestSerialize: serialize_ConfigArgs,
    requestDeserialize: deserialize_ConfigArgs,
    responseSerialize: serialize_ConfigReply,
    responseDeserialize: deserialize_ConfigReply,
  },
  replaceConfig: {
    path: '/IOSXRExtensibleManagabilityService.gRPCConfigOper/ReplaceConfig',
    requestStream: false,
    responseStream: false,
    requestType: ems_grpc_pb.ConfigArgs,
    responseType: ems_grpc_pb.ConfigReply,
    requestSerialize: serialize_ConfigArgs,
    requestDeserialize: deserialize_ConfigArgs,
    responseSerialize: serialize_ConfigReply,
    responseDeserialize: deserialize_ConfigReply,
  },
  cliConfig: {
    path: '/IOSXRExtensibleManagabilityService.gRPCConfigOper/CliConfig',
    requestStream: false,
    responseStream: false,
    requestType: ems_grpc_pb.CliConfigArgs,
    responseType: ems_grpc_pb.CliConfigReply,
    requestSerialize: serialize_CliConfigArgs,
    requestDeserialize: deserialize_CliConfigArgs,
    responseSerialize: serialize_CliConfigReply,
    responseDeserialize: deserialize_CliConfigReply,
  },
  commitReplace: {
    path: '/IOSXRExtensibleManagabilityService.gRPCConfigOper/CommitReplace',
    requestStream: false,
    responseStream: false,
    requestType: ems_grpc_pb.CommitReplaceArgs,
    responseType: ems_grpc_pb.CommitReplaceReply,
    requestSerialize: serialize_CommitReplaceArgs,
    requestDeserialize: deserialize_CommitReplaceArgs,
    responseSerialize: serialize_CommitReplaceReply,
    responseDeserialize: deserialize_CommitReplaceReply,
  },
  // Do we need implicit or explicit commit
  //
  commitConfig: {
    path: '/IOSXRExtensibleManagabilityService.gRPCConfigOper/CommitConfig',
    requestStream: false,
    responseStream: false,
    requestType: ems_grpc_pb.CommitArgs,
    responseType: ems_grpc_pb.CommitReply,
    requestSerialize: serialize_CommitArgs,
    requestDeserialize: deserialize_CommitArgs,
    responseSerialize: serialize_CommitReply,
    responseDeserialize: deserialize_CommitReply,
  },
  configDiscardChanges: {
    path: '/IOSXRExtensibleManagabilityService.gRPCConfigOper/ConfigDiscardChanges',
    requestStream: false,
    responseStream: false,
    requestType: ems_grpc_pb.DiscardChangesArgs,
    responseType: ems_grpc_pb.DiscardChangesReply,
    requestSerialize: serialize_DiscardChangesArgs,
    requestDeserialize: deserialize_DiscardChangesArgs,
    responseSerialize: serialize_DiscardChangesReply,
    responseDeserialize: deserialize_DiscardChangesReply,
  },
  // Get only returns oper data
  // 
  getOper: {
    path: '/IOSXRExtensibleManagabilityService.gRPCConfigOper/GetOper',
    requestStream: false,
    responseStream: true,
    requestType: ems_grpc_pb.GetOperArgs,
    responseType: ems_grpc_pb.GetOperReply,
    requestSerialize: serialize_GetOperArgs,
    requestDeserialize: deserialize_GetOperArgs,
    responseSerialize: serialize_GetOperReply,
    responseDeserialize: deserialize_GetOperReply,
  },
  // Get Telemetry Data
  createSubs: {
    path: '/IOSXRExtensibleManagabilityService.gRPCConfigOper/CreateSubs',
    requestStream: false,
    responseStream: true,
    requestType: ems_grpc_pb.CreateSubsArgs,
    responseType: ems_grpc_pb.CreateSubsReply,
    requestSerialize: serialize_CreateSubsArgs,
    requestDeserialize: deserialize_CreateSubsArgs,
    responseSerialize: serialize_CreateSubsReply,
    responseDeserialize: deserialize_CreateSubsReply,
  },
};

exports.gRPCConfigOperClient = grpc.makeGenericClientConstructor(gRPCConfigOperService);
//
// Should we seperate Exec from Config/Oper?
//
//
var gRPCExecService = exports.gRPCExecService = {
  // Exec commands
  showCmdTextOutput: {
    path: '/IOSXRExtensibleManagabilityService.gRPCExec/ShowCmdTextOutput',
    requestStream: false,
    responseStream: true,
    requestType: ems_grpc_pb.ShowCmdArgs,
    responseType: ems_grpc_pb.ShowCmdTextReply,
    requestSerialize: serialize_ShowCmdArgs,
    requestDeserialize: deserialize_ShowCmdArgs,
    responseSerialize: serialize_ShowCmdTextReply,
    responseDeserialize: deserialize_ShowCmdTextReply,
  },
  showCmdJSONOutput: {
    path: '/IOSXRExtensibleManagabilityService.gRPCExec/ShowCmdJSONOutput',
    requestStream: false,
    responseStream: true,
    requestType: ems_grpc_pb.ShowCmdArgs,
    responseType: ems_grpc_pb.ShowCmdJSONReply,
    requestSerialize: serialize_ShowCmdArgs,
    requestDeserialize: deserialize_ShowCmdArgs,
    responseSerialize: serialize_ShowCmdJSONReply,
    responseDeserialize: deserialize_ShowCmdJSONReply,
  },
};

exports.gRPCExecClient = grpc.makeGenericClientConstructor(gRPCExecService);
