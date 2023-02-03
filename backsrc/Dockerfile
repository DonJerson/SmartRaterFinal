
# syntax=docker/dockerfile:1
FROM python:3
WORKDIR /backend
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
COPY ./requirements.txt ./
# RUN python -m pip install --upgrade pip
# RUN python -m pip install -r requirements.txt
COPY . ./
RUN source venv/bin/activate


CMD ["python", "manage.py", "runserver", "0.0.0.0:8081"]