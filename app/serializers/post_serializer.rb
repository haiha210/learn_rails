# frozen_string_literal: true

class PostSerializer < ActiveModel::Serializer
  attributes :title, :description
end
