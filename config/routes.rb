Rails.application.routes.draw do
  #rails routes, resources adds them all unless there are exceptions such as only:
  #index through a GET request, retrieves entire database, where show is for individual objects based on :id or other parameter retrieved.
  #create through a POST request, creates an object in the database.
  #destroy through a DELETE request, removes an object from the database
  #update through a PUT request, updates an existing object in the database
  #CRUD, create read update delete
  resources :characters, only: [:index, :create, :show, :destroy, :update]
  resources :users, only: [:index]

  #custom routes for signing up and checking current logined user. Used for users controller
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  #custom routes for login sessions
  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"


  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #fallback route in case the initial routes fail their requests. Using default, not edited.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
