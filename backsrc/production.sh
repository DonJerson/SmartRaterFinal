#!/bin/bash -e

#!/bin/bash -e
bash -c 'source /home/ubuntu/smartback/smartvenv/bin/activate &&
 cd /home/ubuntu/smartback && python manage.py runsslserver 0.0.0.0:8081
  --certificate /etc/letsencrypt/live/jersonmendez.com/fullchain.pem 
  --key /etc/letsencrypt/live/jersonmendez.com/privkey.pem'