FROM node:22

WORKDIR /src/app

ENV DB_HOST=34.128.122.193
ENV DB_USER=root
ENV DB_NAME=data_fitassist
ENV DB_PASSWORD=123456
ENV DATABASE_URL="mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:3306/${DB_NAME}"

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npx prisma migrate deploy

EXPOSE 8080

CMD ["npm", "start"]