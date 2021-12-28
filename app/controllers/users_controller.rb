class UsersController < ApplicationController
    #skips the authorize action only for creating a new user. Authorize is only for authorizing a current login, not a login that does not exist yet.
    skip_before_action :authorize, only: :create

    #grabs all users
    def index
        users = User.all
        render json: users
    end

    #creates a new user using user_params
    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #custom route /me to show currently logged in user rather than finding specific user through an id look up
    def show
        render json: @current_user
    end


    private

    #strong params
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
