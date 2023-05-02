FROM node:16-alpine
WORKDIR /app 
COPY package.json ./ 
RUN npm install --force
COPY . . 
RUN head -c 5 /dev/random > random_bytes && npm run build
RUN npm install -g serve
EXPOSE 3000 
CMD ["serve", "-s", "build"]