source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.3"

gem "active_model_serializers", "~> 0.10.0"
gem "rails", "~> 7.0.2", ">= 7.0.2.3"
gem "mysql2", "~> 0.5"
gem "puma", "~> 5.0"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false
gem "rack-cors"
gem "dotenv-rails"
gem "redis"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem "factory_bot_rails"
  gem "ffaker"
  gem "pry"
end

group :test do
  gem "rspec"
  gem "rspec-rails"
  gem "rswag-specs"
end

group :development, :staging, :test do
  gem "rswag-api"
  gem "rswag-ui"
end

