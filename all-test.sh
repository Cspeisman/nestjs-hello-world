#!/bin/sh

function checkServer() {
  for value in {1..5}
  do
    curl http://localhost:3000 && curl http://localhost:8080
    if [[ $? -eq 0 ]]
    then
      return 0
    fi
    sleep 2
  done
    return 1
}

export CI=true
yarn test
cd client && yarn test

yarn start >/dev/null &
FRONTEND_PID=$!

cd ..
yarn start >/dev/null &
BACKEND_PID=$!
checkServer && yarn test:acceptance || echo "uh oh"

kill $FRONTEND_PID
kill $BACKEND_PID
