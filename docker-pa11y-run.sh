#!/bin/bash -e

docker build -t pa11ycontainer -f Dockerfile .

docker run -e AWS_ACCESS_KEY_ID=noop -e AWS_SECRET_ACCESS_KEY=noop \
  --rm pa11ycontainer /bin/sh -c \
  '(node docker-express.js &) && npm run test:pa11y'
