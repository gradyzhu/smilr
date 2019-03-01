class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?
  
  def login(user)
    @current_user = user 
    session[:session_token] = @current_user.reset_session_token
  end

  def logout
    # debugger
    current_user.reset_session_token
    session[:session_token] = nil
    # current_user = nil
  end
  
  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  # def ensure_login
  #   redirect_to new_session_url unless logged_in?
  # end
end
