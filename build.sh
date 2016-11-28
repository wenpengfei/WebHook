#! /bin/bash

WEB_PATH='/home/fe/HogRider'

echo 'build start....'
cd $WEB_PATH
./node_modules/.bin/pm2 delete all
git clean -f && git pull && yarn install && PORT=3002 npm run prod
npm start
echo 'build finish!'
