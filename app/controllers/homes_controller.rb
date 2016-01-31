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
      puts me.as_json
      if me['birthday']
        dob = Date.strptime(me['birthday'],"%m/%d/%Y")
      else
        dob = Date.today
      end

      if me['hometown']
        hometown = me['hometown']['name']
      else
        hometown = nil
      end

      if me['location']
        hometown = me['location']['name']
      else
        hometown = nil
      end

      newUser = User.create(
        name: me['name'],
        email: me['email'],
        facebook_id: facebook_id,
        is_verified: false,
        pob: hometown,
        dob: dob,
        address: location,
        tagline: me['name'],
        about: me['bio']
      )
      newUser.save()
    end
    session[:user] = tmp_session
    redirect_to root_path
  end

  def logout
    reset_session
    redirect_to root_path
  end

end
