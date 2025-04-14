#!/bin/bash
# Debugging the current directory
echo "Current directory:"
pwd

# Debugging the contents of Frontend and my-react-app
echo "Listing contents of Frontend directory:"
ls -la Frontend
echo "Listing contents of Frontend/my-react-app directory:"
ls -la Frontend/my-react-app

# Navigate to Frontend/my-react-app and install dependencies
if [ -d "Frontend/my-react-app" ]; then
  cd Frontend/my-react-app
  echo "Successfully navigated to Frontend/my-react-app"
  echo "Installing frontend dependencies..."
  npm install || { echo "npm install failed"; exit 1; }
  echo "Building frontend..."
  npm run build || { echo "npm run build failed"; exit 1; }
else
  echo "Frontend/my-react-app directory not found. Exiting."
  exit 1
fi

