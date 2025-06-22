#!/bin/bash

# Check migrations by flagfile
if [ ! -f /app/.migrated ]; then

echo "Applyng migrations"

/usr/src/app/wait-for-it.sh db:3306 --timeout=60 --strict -- echo "MySQL is ready"
npx prisma generate
npx prisma migrate dev
npx prisma db seed
touch /app/.migrated

else
  echo "Already migrated"
fi

#if this is not here the container stops, because it doesn't have anything to do
npm run start
