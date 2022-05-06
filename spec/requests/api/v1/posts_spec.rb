# frozen_string_literal: true

require 'swagger_helper'
require 'rails_helper'

RSpec.describe 'api/v1/posts_controller', type: :request do
  after do |example|
    example.metadata[:response][:content] = {
      'application/json' => {
        example: JSON.parse(response.body, symbolize_names: true)
      }
    }
  end

  path '/api/v1/posts' do
    get 'get list post' do
      tags 'Posts'
      consumes 'application/json'

      response 200, 'blog found' do
        schema type: :array, items: { "$ref": '#/definitions/post' }
        consumes 'application/json'

        before do |example|
          create_list :post, 10
          submit_request(example.metadata)
        end

        it 'returns a valid 201 response' do |example|
          assert_response_matches_metadata(example.metadata)
        end
      end
    end
  end
end
