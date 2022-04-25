     
# A minimal Docker image with Node and Puppeteer
#
# Initially based upon:
# https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker

FROM node:14
# RUN apt-get update
WORKDIR /frontend
COPY ./package.json ./
RUN npm install
COPY . ./
CMD [ "npm","start"]