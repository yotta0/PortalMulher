# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package.json
COPY package-lock.json package-lock.json

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose port 3000
EXPOSE ${FRONT_END_PORT}

# Define the command to run your application
CMD ["npm", "start"]
