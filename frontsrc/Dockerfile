     
# A minimal Docker image with Node and Puppeteer
#
# Initially based upon:
# https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker

FROM node:14
WORKDIR /frontend
COPY ./package.json ./
COPY . ./

RUN apt-get update

RUN npm install

CMD [ "npm","index.js" ]