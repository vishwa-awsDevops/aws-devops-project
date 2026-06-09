# Change this line from node:18-alpine to node:20-alpine
FROM node:20-alpine AS build
WORKDIR /app

# Copy package manifests and install production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy backend source code
COPY . .

# Expose the port your backend service runs on (e.g., 5000, 8080)
EXPOSE 5000

# Command to run your app
CMD ["node", "index.js"]
