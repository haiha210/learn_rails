source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'

gem 'active_model_serializers', '~> 0.10.0'
gem 'bootsnap', require: false
gem 'dotenv-rails'
gem 'mysql2', '~> 0.5'
gem 'puma', '~> 5.0'
gem 'rack-cors'
gem 'rails', '~> 7.0.2', '>= 7.0.2.3'
gem 'redis'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

group :development, :test do
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'factory_bot_rails'
  gem 'ffaker'
  gem 'pry'
end

group :test do
  gem 'brakeman'
  gem 'bundle-audit'
  gem 'rspec'
  gem 'rspec-rails'
  gem 'rswag-specs'
end

group :development, :staging, :test do
  gem 'rswag-api'
  gem 'rswag-ui'
end
