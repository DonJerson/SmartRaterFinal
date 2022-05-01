#!/bin/bash -e

bash -c 'cd /root/smartrater/backsrc && /root/smartrater/backsrc/smartvenv/bin/gunicorn prietoWeb.wsgi:application --bind 0.0.0.0:443 --certfile /etc/letsencrypt/live/jersonmendez.com/fullchain.pem --keyfile /etc/letsencrypt/live/jersonmendez.com/privkey.pem'

# bash -c 'source /root/smartrater/backsrc/smartvenv/bin/activate &&
#  cd /root/smartrater/backsrc && /root/smartrater/backsrc/smartvenv/bin/gunicorn prietoWeb.wsgi:application --bind 0.0.0.0:443 --certfile /etc/letsencrypt/live/jersonmendez.com/fullchain.pem --keyfile /etc/letsencrypt/live/jersonmendez.com/privkey.pem'


# bash -c 'source /root/smartrater/backsrc/smartvenv/bin/activate &&
#  cd /root/smartrater/backsrc && python manage.py runserver 0.0.0.0:8081'