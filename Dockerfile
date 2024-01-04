# Use an official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application with Vite.js
RUN npm run build

# Expose the port that your Vite.js application will run on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "run", "dev"]