FactoryBot.define do
  factory :post do
    title { FFaker::Name.name }
    description { FFaker::Lorem.sentence  }
  end
end
