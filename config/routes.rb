Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    # resources :rooms, only: [:index, :create]
    resource :session, only: [:show, :create, :destroy]
    resources :rooms, only: [:index, :create, :update, :destroy, :show]
    resources :reservations, only: [:index, :create]
    get '/reservations/trips', to: 'reservations#trips'
  end

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
end
