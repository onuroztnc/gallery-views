# syntax=docker/dockerfile:1

FROM python:3.9.2

RUN mkdir /back-end
WORKDIR /back-end
COPY requirements.txt /back-end/requirements.txt
RUN pip3 install -r requirements.txt

COPY . .