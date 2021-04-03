# syntax = docker/dockerfile:experimental
FROM gradle:6.5 AS dev
RUN apt-get update && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

WORKDIR /usr/src/app
RUN echo 'export PS1="\[\e[36m\]\${OKTETO_NAMESPACE:-okteto}:\[\e[32m\]\${OKTETO_NAME:-dev} \[\e[m\]\W>"' >> /root/.bash_profile

FROM dev as build
COPY . /usr/src/app
RUN --mount=type=cache,id=gradle,target=/home/gradle/.gradle gradle build --no-daemon

FROM openjdk:8-jre
EXPOSE 8080
WORKDIR /app
COPY --from=build /usr/src/app/build/libs/*.jar .
CMD java -jar *.jar