class SessionsController < ApplicationController
    ##skips the authorize action only for creating a new session. Authorize is only for authorizing a current login, not a login that does not exist yet.
    skip_before_action :authorize, only: :create

    #creates a current session for the user to log in, finding them by username and then checking if user exists and if they pass the .authenticate method using
    #the password params in the parameters. If passing a session is created using their user_id
    #authenticate method, part of has_secure_password, returns self if the password is correct, otherwise false. In this case
    #if the params password of user is correct, it assigns session to user.id
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    #removes current session, ergo logs the user out since the session that has them logged in is removed.
    def destroy
        session.delete :user_id
        head :no_content
    end

end
