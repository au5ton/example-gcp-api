#!/bin/sh

YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# test if config.json already exists
if test -f ../.firebaserc; then
    exit
fi

cat <<EOT >> ../.firebaserc
{
  "projects": {
    "default": "project-id-goes-here"
  }
}
EOT

printf "📣 ${YELLOW}.firebaserc file generated. Fill all fields before deploying to Firebase!${NC}\n"
