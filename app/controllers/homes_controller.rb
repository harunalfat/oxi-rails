class HomesController < ApplicationController
  def index
    if session[:user]
      user = session[:user]
      @user = User.where(facebook_id: user['uid']).first
    else
      @user = nil
    end
  end

  def login
    tmp_session = request.env['omniauth.auth']
    facebook_id = tmp_session['uid']
    user = User.where(facebook_id: facebook_id).first
    unless user
      name = tmp_session['extra']['name']
      email = tmp_session['extra']['email']
      User.create(name: name, email:email, facebook_id: facebook_id, is_verified: false)
    end
    session[:user] = tmp_session
    redirect_to root_path
  end

  def logout
    reset_session
    redirect_to root_path
  end

end
