#!/bin/bash

# Start Cloudflare tunnel for just-press-tab.com
echo "Starting Cloudflare tunnel for just-press-tab.com..."

# Check if cloudflared is installed
if ! command -v cloudflared &> /dev/null; then
    echo "Error: cloudflared is not installed. Please install it first."
    exit 1
fi

# Check if the config file exists
if [ ! -f "just-press-tab.yml" ]; then
    echo "Error: just-press-tab.yml not found in current directory"
    exit 1
fi

# Start the tunnel
echo "Running tunnel with config: just-press-tab.yml"
cloudflared tunnel --config just-press-tab.yml run 