FROM python:3.11-bookworm

WORKDIR /app

COPY requirements.txt .

RUN apt-get update -y && pip install -U pip && pip install -r requirements.txt


COPY . .
