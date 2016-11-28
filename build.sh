#! /bin/bash

WEB_PATH='/home/fe/HogRider'

echo 'build start....'
cd $WEB_PATH
git clean -f && git pull && yarn install && PORT=3002 npm run prod
echo 'build finish!'
