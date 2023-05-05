ARG BUILD_FROM
FROM $BUILD_FROM


# Set shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Setup base
ARG BUILD_ARCH=amd64
RUN \
  if [ "${BUILD_ARCH}" = "aarch64" ]; then ARCH="arm64"; fi \
  && if [ "${BUILD_ARCH}" = "armhf" ]; then ARCH="arm"; fi \
  && if [ "${BUILD_ARCH}" = "armv7" ]; then ARCH="arm"; fi \
  && if [ "${BUILD_ARCH}" = "amd64" ]; then ARCH="amd64"; fi \
  \
  && curl -L -s \
  "https://github.com/portainer/portainer/releases/download/2.6.2/portainer-2.6.2-linux-${ARCH}.tar.gz" \
  | tar zxvf - -C /opt/

# Copy root filesystem
COPY rootfs /
