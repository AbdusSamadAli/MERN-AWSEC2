#!/bin/bash
cd /home/ubuntu/MERN-AWSEC2/Backend

# Stop any existing PM2 processes
pm2 stop all || true
pm2 delete all || true

# Start the full-stack app (serves API + frontend)
pm2 start server.js --name mern-app
