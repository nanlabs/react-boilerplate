ARG VARIANT="16-buster"

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends jq

ARG EXTRA_NODE_VERSION=16
RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm ls-remote && nvm install ${EXTRA_NODE_VERSION}"
