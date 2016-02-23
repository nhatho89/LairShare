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
      flash.now[:errors] = @user.errors.full_messages, status: 400
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :super_name)
  end
end
