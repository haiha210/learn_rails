class Api::V1::PostsController < ApplicationController
  def index
    posts = Post.limit(10)

    render json: posts, status: :ok
  end
end
