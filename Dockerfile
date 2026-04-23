# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx template for SPA routing and dynamic PORT
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Cloud Run provides the PORT environment variable. Default to 8080 if not set.
ENV PORT=8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
