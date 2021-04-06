Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get '/comics', to: 'pages#home'
  get '/comics/:id', to: 'pages#home'
  get '/characters', to: 'pages#home'
  get '/characters/:id', to: 'pages#home'
end
