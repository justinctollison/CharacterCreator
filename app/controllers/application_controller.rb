class ApplicationController < ActionController::API
  #cookies for session tracking, whenever the user leaves the webpage and comes back, the session will be continued(need a better word)
  include ActionController::Cookies

#exception handling, RecordInvalid when save! and create!, raises when character or user is invalid
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

#before web app is loaded, runs authorize method. Checks that current user matches the id in the created session.
before_action :authorize

private


#class variable @current_user must be the matching User that is found through the session id when first created when logged in.
#if not matching, renders an error and gives status: :unauthorized.
def authorize
  @current_user = User.find_by(id: session[:user_id])

  render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
end

#exception call
def render_unprocessable_entity_response(exception)
  render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
end

end