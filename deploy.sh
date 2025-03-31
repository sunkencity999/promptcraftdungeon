#!/bin/bash

# PromptCraft Dungeon Deployment Script
# This script uploads the application to the website via FTP

echo "Starting PromptCraft Dungeon deployment..."

# FTP server details
FTP_HOST="ftp.promptcraftdungeon.com"
FTP_USER="admin@promptcraftdungeon.com"
FTP_PASS="CStyle32!"
FTP_PORT="21"
REMOTE_DIR="/public_html/"

# Check if lftp is installed
if ! command -v lftp &> /dev/null; then
    echo "Error: lftp is not installed. Please install it first."
    echo "You can install it using: brew install lftp"
    exit 1
fi

# Create a temporary script file with the FTP commands
# This avoids exposing the password in the process list
SCRIPT_FILE=$(mktemp)

cat > "$SCRIPT_FILE" << EOF
open -u "$FTP_USER","$FTP_PASS" -p "$FTP_PORT" "$FTP_HOST"
set ssl:verify-certificate no
set ftp:ssl-protect-data true
set mirror:use-pget-n 5
mirror --reverse --delete --verbose=3 --exclude .git/ --exclude .DS_Store --exclude deploy.sh --exclude README.md ./ "$REMOTE_DIR"
bye
EOF

# Execute the script with lftp
lftp -f "$SCRIPT_FILE"

# Remove the temporary script file
rm "$SCRIPT_FILE"

echo "Deployment completed!"
