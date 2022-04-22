# frozen_string_literal: true

require 'rails_helper'

RSpec.configure do |config|
  config.swagger_root = Rails.root.join('swagger').to_s

  definitions = Dir.glob("#{Rails.root.join("swagger", "definitions").to_path}/*.yaml").map do |yaml_path|
    YAML.load_file(yaml_path)
  end

  config.swagger_docs = {
    'v1/swagger.yaml' => {
      swagger: '2.0',
      info: {
        title: 'API V1',
        version: 'v1'
      },
      paths: {},
      definitions: {
      }.merge(*definitions)
    }
  }

  config.swagger_format = :yaml
end
