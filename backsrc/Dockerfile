
# syntax=docker/dockerfile:1
FROM python:3
WORKDIR /backend
COPY . ./
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt
CMD ["python", "manage.py", "runserver", "0.0.0.0:8081"]