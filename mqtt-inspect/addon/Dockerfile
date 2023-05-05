ARG BUILD_FROM
FROM $BUILD_FROM

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN \
    apk add --no-cache \
    nodejs=18.14.2-r0

COPY rootfs /

# https://scoutapm.com/blog/how-to-use-docker-healthcheck
# HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1

CMD [ "node", "index.js"]