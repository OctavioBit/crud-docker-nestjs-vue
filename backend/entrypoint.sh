#!/bin/bash

/usr/src/app/wait-for-it.sh db:3306 --timeout=60 --strict -- echo "MySQL is ready"

npx prisma generate
npx prisma migrate dev
npx prisma db seed

CMD [ "npm", "run", "start" ]