Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :users do
      resources :photos, only: [:index]
      resources :albums, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :show, :destroy, :update, :index]
    resources :albums, only: [:show, :destroy, :update]
  end
  
  root to: "static_pages#root"
end
