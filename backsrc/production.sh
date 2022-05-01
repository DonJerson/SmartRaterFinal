#!/bin/bash -e

# bash -c 'source /root/smartrater/backsrc/smartvenv/bin/activate &&
#  cd /root/smartrater/backsrc && python manage.py runsslserver 0.0.0.0:8081
#   --certificate /etc/letsencrypt/live/jersonmendez.com/fullchain.pem 
#   --key /etc/letsencrypt/live/jersonmendez.com/privkey.pem'

bash -c 'source /root/smartrater/backsrc/smartvenv/bin/activate &&
 cd /root/smartrater/backsrc && python manage.py runserver 0.0.0.0:8081'