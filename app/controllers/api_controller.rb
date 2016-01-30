class ApiController < ServiceController
  def show_users
    search = params[:search]
    if search
      user = User.where("name like ?", "%#{search}%")
    else
      user = User.all
    end
    render json: user
  end

  def show_current_user
    facebook = User.koala(session[:user]['credentials'])
    user = facebook.get_object("me")
    render json: user
  end
end
