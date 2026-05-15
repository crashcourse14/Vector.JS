#!/bin/sh
echo "Set a commit message:"
read COMMIT_MSG 


git init
git add .
git commit -m "$COMMIT_MSG"
git push --force

