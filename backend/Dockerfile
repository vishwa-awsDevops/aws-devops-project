FROM node:18-alpine
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
