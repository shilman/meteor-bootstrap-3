#!/bin/bash
# USAGE: ./update.sh vX.Y.Z
# where X.Y.Z is the tag of the BS3 repo

if [ ! -d "git-repo" ]; then
  git clone https://github.com/twbs/bootstrap.git git-repo
fi
# rm -rf bootstrap-3/fonts
# rm -rf bootstrap-3/css/bootstrap-glyphicons.css
cd "git-repo/"
git checkout -- .
git fetch
git checkout $@
npm install
grunt dist
cp -r dist/* ../bootstrap-3/
