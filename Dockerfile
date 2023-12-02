FROM node:18-alpine as builder
WORKDIR /home/app
COPY package*.json ./
COPY tsconfig.json ./
COPY ./src ./src
COPY ./prisma/schema.prisma ./prisma/schema.prisma
RUN npm install && npm run build

FROM node:18-alpine
ENV DATABASE_URL=postgres://cbfiocnx:vOTseMrx4E6ezJtnclaAcutvi5JINoWT@silly.db.elephantsql.com/cbfiocnx \
    PORT=5000 \
    NODE_ENV=production

COPY --from=builder /home/app/package*.json ./
COPY --from=builder /home/app/dist ./dist
COPY --from=builder /home/app/prisma ./prisma
RUN npm ci --only=production && npx prisma generate

EXPOSE 5000
EXPOSE 3306

CMD ["npm","run","start"]