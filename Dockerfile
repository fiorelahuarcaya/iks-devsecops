FROM node:alpine

# Set the HOST environment variable to 0.0.0.0 so the server listens on all IPv4 addresses
ENV HOST=0.0.0.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
EXPOSE 3000
