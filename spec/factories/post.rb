# frozen_string_literal: true

FactoryBot.define do
  factory :post do
    title { FFaker::Name.name }
    description { FFaker::Lorem.sentence }
  end
end
