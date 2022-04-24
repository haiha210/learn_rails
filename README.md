# README

## Setup rswag
rails g rswag:api:install
rails g rswag:ui:install
RAILS_ENV=test rails g rswag:specs:install

## Generate swagger
rake rswag:specs:swaggerize

## Generate channel
rails g channel counter --no-test-framework

## Start cable
bundle exec puma -p 28080 cable/config.ru
