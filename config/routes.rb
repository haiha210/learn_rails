Rails.application.routes.draw do
  unless Rails.env.production?
    mount Rswag::Ui::Engine => "/api-docs"
    mount Rswag::Api::Engine => "/api-docs"
  end

  mount ActionCable.server => '/cable'

  namespace :api do
    namespace :v1 do
      resources :posts, only: :index
    end
  end
end
