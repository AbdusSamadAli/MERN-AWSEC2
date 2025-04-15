#!/bin/bash

# Debugging the current directory
echo "Current directory:"
pwd

# Check the contents of the Frontend directory with absolute path
echo "Listing contents of /home/ubuntu/MERN-AWSEC2/Frontend directory:"
ls -la /home/ubuntu/MERN-AWSEC2/Frontend

# Check the contents of the my-react-app directory with absolute path
echo "Listing contents of /home/ubuntu/MERN-AWSEC2/Frontend/my-react-app directory:"
ls -la /home/ubuntu/MERN-AWSEC2/Frontend/my-react-app

# Navigate to the absolute path of my-react-app
if [ -d "/home/ubuntu/MERN-AWSEC2/Frontend/my-react-app" ]; then
  cd /home/ubuntu/MERN-AWSEC2/Frontend/my-react-app
  echo "Successfully navigated to Frontend/my-react-app"
  echo "Installing frontend dependencies..."
  npm install || { echo "npm install failed"; exit 1; }
  echo "Building frontend..."
  npm run build || { echo "npm run build failed"; exit 1; }
else
  echo "Frontend/my-react-app directory not found. Exiting."
  exit 1
fi
