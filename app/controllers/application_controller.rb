class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :verified?
  def current_user
    session[:user]
  end

  def verified?
    User.where(facebook_id: current_user['uid'], is_verified: true).first
  end
end
