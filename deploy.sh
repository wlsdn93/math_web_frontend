#! /bin/bash

git fetch --all

git reset --hard origin/master

npm run build
