author=$(git log -1 --pretty=%an)

echo "Commit Message:"
read COMMIT_MSG

git init
git add .
git commit -m "[$author]: $COMMIT_MSG"

git push