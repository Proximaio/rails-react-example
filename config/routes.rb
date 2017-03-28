Rails.application.routes.draw do
  root to: 'dashboard#index'

  # get 'react', to: 'react#index'
  get 'myson', to: 'react#index'
  get '*react', to: 'react#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
