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
      me = User.koala(tmp_session['credentials']).get_object(
        "me?fields=name,email,birthday,hometown,location,bio"
      );
      dob = Date.strptime(me['birthday'],"%m/%d/%Y")
      User.create(
        name: me['name'],
        email: me['email'],
        facebook_id: facebook_id,
        is_verified: false,
        pob: me['hometown']['name'],
        dob: dob,
        address: me['location']['name'],
        tagline: me['name'],
        about: me['bio']
      )
    end
    session[:user] = tmp_session
    redirect_to root_path
  end

  def logout
    reset_session
    redirect_to root_path
  end

end
