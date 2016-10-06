#!/bin/bash
echo 'Currently executing project installation.'
echo 'Setting npm global folder to home.'
mkdir ~/.npm_global
npm config set prefix '~/.npm_global'
export PATH=~/.npm_global/bin:$PATH
source ~/.profile
cd /xrgrpc/
echo 'Fixing npm synced folder Vagrant issues, remove if not Vagrant.'
mkdir -p ~/testxrclient/node_modules/
ln -s ~/testxrclient/node_modules/ node_modules
echo 'Installing project dependencies from npm.'
npm install
node node_modules/.bin/mocha tests/index.js
echo 'Finished execution.'