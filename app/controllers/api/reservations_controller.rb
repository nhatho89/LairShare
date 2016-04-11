class Api::ReservationsController < ApplicationController

  def trips
    @trips = current_user.trip_reservations
    render :trips, status: 200
  end

  def create
    @reservation = current_user.trip_reservations.new(reservation_params)
    if @reservation.save!
      render json: @reservation, status: 201
    else
      render json: @reservation.errors.full_messages, status: 401
    end
  end

  def index
    @reservations = Reservation.all
  end

  private

  def reservation_params
    params.require(:reservation).permit(
    :room_id,
    :start_date,
    :end_date,
    :guest_num,
    :guest_id,
    :message
    )
  end


end
