FROM node:18-alpine as builder
WORKDIR /home/app
COPY package*.json ./
COPY tsconfig.json ./
COPY ./src ./src
COPY ./prisma/schema.prisma ./prisma/schema.prisma
RUN npm install && npm run build

FROM node:18-alpine
ENV DATABASE_URL=mysql://root:CaeFfC5GhfF3-da5Hg-55d-A5dea2hEf@monorail.proxy.rlwy.net:37029/railway \
    PORT=443 \
    NODE_ENV=production
WORKDIR /home/app
COPY --from=builder /home/app/package*.json ./
COPY --from=builder /home/app/dist ./dist
COPY --from=builder /home/app/prisma ./prisma
RUN npm ci --only=production && npx prisma generate

EXPOSE 443
EXPOSE 37029

CMD ["npm","run","start"]