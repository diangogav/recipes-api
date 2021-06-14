FROM node:14-alpine

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

COPY . .

EXPOSE 9000

CMD [ "npm", "run", "start:dev" ]