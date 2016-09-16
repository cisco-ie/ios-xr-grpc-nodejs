# ios-xr-grpc-nodejs
IOS-XR gRPC NodeJS connectivity library.

Provides connectivity support between the IOS-XR gRPC server and a client application built using NodeJS.  
Includes a basic example demonstrating getting configuration, merging configuration, and deleting configuration.

# Requirements
  * [NodeJS v4+](https://nodejs.org/)
  * [npm (node package manager)](http://npmjs.com/)
  * IOS-XR ([available as IOS-XRv](#IOS-XRv))

# Setup
A working demonstration of setup is most easily visible in the tests/bootstrap directory.

## Configure gRPC on IOS-XR

```
!! iosxr1 configuration  
!  
interface GigabitEthernet0/0/0/0  
 ipv4 address 11.1.1.254 255.255.255.0  
 no shutdown  
!  
grpc  
 port 57500  
!
```

## Configure client system

```
# Assumes pre-installation of NodeJS  
git clone https://github.com/cisco-grpc-connection-libs/ios-xr-grpc-nodejs.git  
cd ios-xr-grpc-nodejs  
npm install  
# Done!
```

## IOS-XRv  
IOS-XRv is a virtualized packaging of an IOS-XR instance that is runnable by Vagrant.  
It is downloadable via application at https://xrdocs.github.io/getting-started/steps-download-iosxr-vagrant  
Installation and setup instructions are available at https://xrdocs.github.io/application-hosting/tutorials/iosxr-vagrant-quickstart  
```
cd tests  
vagrant up  
vagrant ssh testiosxr  
vagrant ssh testclient  
```