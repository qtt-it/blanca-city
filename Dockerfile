# FROM oven/bun:latest
# COPY package.json ./
# COPY bun.lock ./
# # RUN bun install
# RUN bun install
# RUN apt-get update && apt-get install -y nodejs npm

# COPY . .
# # ENV NEXT_TELEMETRY_DISABLED 1
# RUN bun --bun next build
# CMD bun run start

# Stage 1: Build the application
FROM node:18-alpine
WORKDIR /app

# WORKDIR /app/v2-stc
COPY package*.json ./

# Cài đặt các dependencies của dự án
RUN npm install --frozen-lockfile

# Copy toàn bộ mã nguồn vào container

COPY . .
RUN npm install -g npm
RUN npm install --force
RUN npm run build
# COPY .env .env
EXPOSE 3000
CMD ["npm", "start"]
