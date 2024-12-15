# Use an Alpine-based Node image for build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm i

# Copy source files and build the React app
COPY . .
RUN npm run build

# Use an Alpine-based Nginx image for the final stage
FROM nginx:alpine

# Copy built app from the build stage
COPY --from=build dist /usr/share/nginx/html

# Configure Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx will use
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
