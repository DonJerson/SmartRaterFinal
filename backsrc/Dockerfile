
# syntax=docker/dockerfile:1
FROM python:3
WORKDIR /backend
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
COPY ./requirements.txt ./
COPY ./smartvenv/ ./smartvenv

RUN . ./smartvenv/bin/activate

RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt
COPY . ./


CMD  . ./smartvenv/bin/activate && python manage.py runserver 0.0.0.0:8081