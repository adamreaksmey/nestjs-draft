ARG NODE_VERSION=16.17.0-alpine
ARG HOST=0.0.0.0
ARG PORT=3000

# * Development Stage
FROM node:${NODE_VERSION} As development
ARG HOST
ARG PORT
ARG NODE_ENV
ARG CI_MODE

ENV HOST=${HOST}
ENV PORT=${PORT}
ENV NODE_ENV=${NODE_ENV:-development}
ENV CI_MODE=${CI_MODE:-true}

WORKDIR /app
COPY --chown=node:node package*.json ./

RUN if [ ${CI_MODE} == 'true' ]; then \
    npm ci --production=false; \
    else npm i --production=false; fi

EXPOSE ${PORT}
CMD ["npm", "run", "start:dev"]

#* Build Stage
FROM development as builder
# ARG NODE_ENV

# ENV NODE_ENV=${NODE_ENV:-production}

WORKDIR /app
COPY --chown=node:node . .
# COPY --chown=node:node --from=development /app/ .

RUN npm run build --fail-on-error
RUN npm prune --production && \
    npm cache clean --force

# * Production Stage
FROM node:${NODE_VERSION} as production
ARG HOST
ARG PORT

ENV HOST=${HOST}
ENV PORT=${PORT}

WORKDIR /app
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/dist ./dist

USER node
EXPOSE ${PORT}
CMD ["node", "dist/main"]
