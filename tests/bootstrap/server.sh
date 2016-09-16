#!/bin/bash

sudo apt-get update
sudo apt-get install -y build-essential checkinstall cmake git
echo 'Installing NodeJS build tools'
sudo apt-get remove gyp
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
su - vagrant -c 'bash /vagrant/bootstrap/config/testclient.sh'