protoc --js_out=import_style=commonjs,binary:. --grpc_out=. --plugin=protoc-gen-grpc=`which grpc_node_plugin` ems_grpc.proto telemetry.proto