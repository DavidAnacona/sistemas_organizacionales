FROM node:16-alpine as dependencies

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

FROM node:16-alpine as builder

WORKDIR /app

# Important files
COPY next.config.js ./
COPY package.json yarn.lock ./
COPY tsconfig.json ./

# node_modules
COPY --from=dependencies /app/node_modules ./node_modules

# Folders structure
COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY shared ./shared
COPY utility ./utility
COPY lang ./lang

RUN yarn build

FROM node:16-alpine as runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 80

ENV PORT 80

CMD ["node", "server.js"]