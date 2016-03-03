class Api::SessionsController < ApplicationController
  def show
    render :show
  end

  def destroy
    sign_out! if current_user
    render :show
  end
end
