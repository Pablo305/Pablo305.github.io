#!/bin/bash

echo "🚀 Setting up DCS App Suite Website..."
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | sed 's/v//')
REQUIRED_VERSION="16.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then 
    echo "❌ Node.js version $NODE_VERSION is too old. Please upgrade to Node.js 16+."
    exit 1
fi

echo "✅ Node.js version $NODE_VERSION detected"

# Install dependencies
echo "📦 Installing dependencies..."
if command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "⚙️ Creating .env file..."
    cat > .env << EOL
# DCS App Suite Environment Variables
REACT_APP_NAME=DCS App Suite
REACT_APP_VERSION=1.0.0
REACT_APP_DESCRIPTION=Revolutionary AI-Powered Business Solutions

# API Configuration (if needed)
REACT_APP_API_URL=https://api.dcs-suite.com
REACT_APP_ENVIRONMENT=development

# Analytics (replace with actual IDs)
REACT_APP_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
REACT_APP_HOTJAR_ID=HOTJAR_ID

# Social Media
REACT_APP_TWITTER_HANDLE=@dcssuite
REACT_APP_LINKEDIN_URL=https://linkedin.com/company/dcs-suite
EOL
    echo "✅ .env file created"
fi

# Build the project to check for errors
echo "🔧 Running initial build check..."
if command -v yarn &> /dev/null; then
    yarn build
else
    npm run build
fi

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed - please check for errors"
    exit 1
fi

echo ""
echo "🎉 Setup complete! Your DCS App Suite website is ready."
echo "======================================================"
echo ""
echo "To start the development server:"
echo "  npm start    (or yarn start)"
echo ""
echo "To build for production:"
echo "  npm run build    (or yarn build)"
echo ""
echo "The website will be available at: http://localhost:3000"
echo ""
echo "Portfolio Overview:"
echo "  • Total Value: $2.8M"
echo "  • Applications: 5"
echo "  • Active Users: 9,500+"
echo "  • Avg Completion: 86%"
echo ""
echo "Happy coding! 🚀"