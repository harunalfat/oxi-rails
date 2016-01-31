class UsersController < ApplicationController
  def show
    if logged_in?
      @user = User.all
      render json: @user
    end
  end

  def login
    @user = User.koala(request.env['omniauth.auth']['credentials'])
    @facebook = request.env['omniauth.auth']
  end

  def find
    @user = User.where(facebook_id: params[:facebook_id]).first
  end
end
