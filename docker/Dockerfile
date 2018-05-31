FROM alpine:3.7
MAINTAINER Seth Wright <seth@crosse.org>

RUN apk update                                                      && \
    apk add bash gcc libc-dev libffi make nodejs-npm ruby ruby-dev  && \
    gem install --no-rdoc --no-ri compass compass-normalize json    && \
    apk del gcc libc-dev make ruby-dev

RUN /bin/echo 'export PS1="\w \$ "' > /root/.bashrc

ADD entrypoint.sh /usr/local/bin
VOLUME ["/data"]
WORKDIR "/data"
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
