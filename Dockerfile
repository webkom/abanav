FROM node:16-alpine AS builder

WORKDIR /app

COPY . ./

RUN yarn install --prod
RUN yarn build

CMD [ "yarn","start" ]

FROM pierrezemb/gostatic

COPY --from=builder /app/build /srv/http
