class ApiController < ServiceController
  def show_users
    search = params[:search]
    if search
      user = User.where("upper(name) like upper(?)", "%#{search}%").order(name: :asc)
    else
      user = User.all.order(name: :asc)
    end
    render json: user
  end

  def show_current_user
    user = User.where(facebook_id: session[:user]['uid']).first
    render json: user
  end

  def update
    user = User.where(facebook_id: session[:user]['uid']).first
    if user
      user.update(
        name: params[:name],
        email: params[:email],
        pob: params[:pob],
        dob: params[:dob],
        address: params[:address],
        email: params[:email],
        phone: params[:phone],
        tagline: params[:tagline],
        about: params[:about]
      )
      user.save
    end
    render json: {status: 200, message:"update success"}
  end
end
