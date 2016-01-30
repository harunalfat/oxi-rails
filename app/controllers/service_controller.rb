class ServiceController < ActionController::Base
  NOT_AUTHORIZED_RESPONSE = {status: 401, message: "not_authorized"}

  protect_from_forgery with: :exception
  before_action :logged_in?

  def logged_in?
    if session[:user].nil?
      render json: NOT_AUTHORIZED_RESPONSE, status: 401
      reset_session
    end
  end
end
