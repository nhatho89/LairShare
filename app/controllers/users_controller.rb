class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render json: current_user, :include => :user_profile
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
