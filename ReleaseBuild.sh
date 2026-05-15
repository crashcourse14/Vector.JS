#!/bin/sh
LATEST_BUILD_VER="1.0.0"
echo "Set a commit message:"
read COMMIT_MSG 

echo "$LATEST_BUILD_VER" >> latestVersion.txt
echo "Updated latestVersion.txt"

git init
git add .
git commit -m "$COMMIT_MSG"
git push --force

