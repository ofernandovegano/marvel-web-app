Rails.application.routes.draw do
  devise_for :users
  # React routes
  root to: 'pages#home'

  get '/comics/page/:page', to: 'pages#home'
  get '/comics/:id', to: 'pages#home'
  get '/characters', to: 'pages#home'
  get '/characters/:id', to: 'pages#home'
  get '/user_favorites', to: 'pages#home'

  # API from backend to frontend
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post '/favorite_comic', to: 'favorites#add_to_favorite_comics'
      post '/favorite_character', to: 'favorites#add_to_favorite_characters'
      get '/favorites', to: 'favorites#favorite_comics'
      get '/favorites', to: 'favorites#favorite_characters'
    end
  end
end
