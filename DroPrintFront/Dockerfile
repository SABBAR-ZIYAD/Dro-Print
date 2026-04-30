FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy the rest of the application code
# (In development this will be overridden by the volume, but good for completeness)
COPY . .

EXPOSE 5173

# Run Vite development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
