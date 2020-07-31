## Heroku deploy
    - run ```npm push heroku master```
## Cancel Heroku running build
    - Install build plugin if not added ```heroku plugins:install heroku-builds```
    - After that run command ```heroku builds:cancel BUILD_UUID -a APP_NAME```