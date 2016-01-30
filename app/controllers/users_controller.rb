class UsersController < ApplicationController
  def show
    if logged_in?
      @user = User.all
      render json: @user
  end

  def login
    @user = User.koala(request.env['omniauth.auth']['credentials'])
    @facebook = request.env['omniauth.auth']
  end
end
