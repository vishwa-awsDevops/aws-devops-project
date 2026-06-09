# Step 1: Build Stage
# Change this line from node:18-alpine to node:20-alpine
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code and build
COPY . .
RUN npm run build

# Step 2: Production Stage
FROM nginx:alpine
# Copy the built production assets from the build stage to Nginx web root
# Note: change "dist" to "build" depending on what your framework generates
COPY --from=build /app/dist /usr/share/nginx/html

# Expose Nginx default port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
