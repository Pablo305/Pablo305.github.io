# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Create .env file
RUN echo "REACT_APP_NAME=DCS App Suite" > .env && \
    echo "REACT_APP_VERSION=1.0.0" >> .env && \
    echo "REACT_APP_DESCRIPTION=Revolutionary AI-Powered Business Solutions" >> .env && \
    echo "REACT_APP_API_URL=https://api.dcs-suite.com" >> .env && \
    echo "REACT_APP_ENVIRONMENT=development" >> .env

# Expose port 3000
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]