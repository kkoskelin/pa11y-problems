FROM cypress/base:12.16.2

WORKDIR /home/app

COPY package.json /home/app/package.json
COPY package-lock.json /home/app/package-lock.json
RUN npm set progress=false && \
  npm ci

COPY . /home/app

