# syntax = docker/dockerfile:experimental
FROM gradle:6.5 AS dev
RUN apt-get update && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

WORKDIR /usr/src/app

FROM dev as build
COPY . /usr/src/app
RUN --mount=type=cache,id=gradle,target=/home/gradle/.gradle gradle build --no-daemon

FROM openjdk:8-jre
EXPOSE 8080
WORKDIR /app
COPY --from=build /usr/src/app/build/libs/*.jar .
CMD java -jar *.jar