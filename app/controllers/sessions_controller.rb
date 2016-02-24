class Api::SessionsController < ApplicationController
  before_action :require_no_user!, only: :create

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])
    if user.nil?
      render json: {error: "User not found"}, status: 401
    else
      login_user!(user)
      render json: current_user, :include => :user_profile
    end
  end

  def destroy
    logout_user!
    render json: ["Logout successfully"]
  end

  def show
    render json: current_user, :include => :user_profile
  end
end
