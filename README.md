🚀 MERN Stack Application with CI/CD on AWS

This project is built to strengthen DevOps skills by deploying a MERN (MongoDB, Express, React, Node.js) application on an AWS EC2 instance using a fully automated CI/CD pipeline powered by GitHub Actions.

🛠️ Project Highlights:
🌐 Full-stack MERN application

🚀 Deployment on AWS EC2 Ubuntu server

🔄 GitHub Actions for CI/CD automation

🗂️ Code structured for production readiness

🔧 PM2 for process management

🔒 SSH-based secure deployment

Whenever code is pushed to the main branch, a GitHub Actions workflow automatically:

Pulls the latest code to the EC2 instance

Installs dependencies

Builds the React frontend

Moves the build to the backend's public directory

Restarts the Node.js server using PM2

