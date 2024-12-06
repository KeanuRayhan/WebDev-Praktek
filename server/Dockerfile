FROM node:18-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm i
COPY . .
# coba nambah port
EXPOSE 8080
# CMD ["npm", "start"]
CMD ["node", "server.js"]