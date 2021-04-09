Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get '/comics', to: 'pages#home'
  get '/comics/:id', to: 'pages#home'
  get '/characters', to: 'pages#home'
  get '/characters/:id', to: 'pages#home'
  get '/user_favorites', to: 'pages#user_favorites'
  # resources :favorites, only: :index

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post '/favorite_comic', to: 'favorites#add_to_favorite_comics'
      post '/favorite_character', to: 'favorites#add_to_favorite_characters'
      get '/favorites', to: 'favorites#favorite_comics'
      get '/favorites', to: 'favorites#favorite_characters'
    end
  end
end
