     
# A minimal Docker image with Node and Puppeteer
#
# Initially based upon:
# https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker

FROM python:3.8
WORKDIR /backend
COPY . ./
RUN apt-get update
RUN apt-get install -yyq fonts-liberation
RUN apt-get -yyq install postgresql
RUN apt-get -yyq install --reinstall libpq-dev
RUN apt-get -yyq install libjpeg-dev zlib1g-dev

RUN apt-get -yyq install mariadb-server
RUN apt-get -yyq install default-libmysqlclient-dev
RUN apt-get -yyq install libpython3.7-dev

RUN python -m pip install --upgrade pip

COPY requirements.txt requirements.txt
RUN python -m pip install -r requirements.txt
