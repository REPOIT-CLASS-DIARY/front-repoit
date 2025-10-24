# 빌드 단계
FROM node:18.20 AS builder
WORKDIR /app

# TypeScript와 Vite 설치
RUN npm install -g typescript vite

# 의존성 설치 전 캐시 제거
COPY package.json ./
RUN rm -rf package-lock.json node_modules
RUN npm install

# 소스 코드 복사 및 빌드
COPY . .
RUN npm run build

# 실행 단계
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]