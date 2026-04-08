#/bin/sh

cd /app

# Install dependencies
npm install

# Start the application
npm run dev -- --host 0.0.0.0 --port 5173