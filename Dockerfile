FROM oven/bun:latest
COPY package.json ./
COPY bun.lock ./
# RUN bun install
RUN bun install
RUN apt-get update && apt-get install -y nodejs npm

COPY . .
# ENV NEXT_TELEMETRY_DISABLED 1
RUN bun --bun next build
CMD bun run start
# EXPOSE 3000
# CMD ["npm", "start"]

# Stage 1: Build the application
# FROM node:18-alpine

# WORKDIR /app/v2-stc

# COPY . .
# RUN npm install -g npm
# RUN npm install --force
# RUN npm run build
# COPY .env .env
