FROM node:22

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npx prisma migrate deploy

EXPOSE 8080

CMD ["npm", "start"]