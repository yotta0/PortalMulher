FROM python:3.11-bookworm

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .

RUN apt-get update -y && pip install -U pip && pip install -r requirements.txt

COPY . .
