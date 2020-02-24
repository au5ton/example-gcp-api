#!/bin/sh

YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# test if config.json already exists
if test -f ../config.json; then
    exit
fi

cat <<EOT > config.json
{
    "gcp": {
        "datacenter": "us-central1",
        "project_id": ""
    }
}
EOT

cat <<EOT > .env
GOOGLE_APPLICATION_CREDENTIALS=/some/json/file/firebase-adminsdk.json
EOT

printf "📣 ${YELLOW}config.json and .env files generated. Fill all fields before deploying to Firebase!${NC}\n"
