FROM node:18
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm cache clean --force
RUN npm install
COPY . .
EXPOSE 3333
CMD ["npm", "run", "dev"]
