class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    review = Review.create!(review_params)
    render json: review
  end

  def delete
    @review = nil
  end

  private

  def review_params
    params.require(:review).permit(
      :room,
      :user,
      :body,
      :rating,
    )
  end
end
