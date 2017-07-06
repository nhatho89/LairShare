class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    review = Review.new(review_params)
    review.user = current_user
    if review.save!
      render json: review, status: 201
    else
      render json: review.errors.full_messages, status: 401
    end
  end

  def delete
    @review = nil
  end

  private

  def review_params
    params.require(:review).permit(
      :room_id,
      :user_id,
      :body,
      :rating,
    )
  end
end
