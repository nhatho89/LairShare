class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:super_name],
      params[:user][:password]
    )

    if user
      sign_in(user)
      redirect_to posts_url
    else
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end
end
