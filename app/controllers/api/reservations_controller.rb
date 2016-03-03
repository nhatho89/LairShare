class Api::ReservationsController < ApplicationController

  # before_action :require_login!#, except: :query

  # def query
  #   # rsvp = Reservation.new(query_params)
  #   # render json: rsvp.overlapping_unbookable_period.empty?
  #   @queryRsvp = Reservation.new(query_params)
  #   render :query, status: 200
  # end
  #
  def trips
    @trips = current_user.trip_reservations
    render :trips, status: 200
  end

  def create

    @reservation = current_user.reservations.new(reservation_params)
        if @reservation.save
          render json: @reservation, status: 201
        else
          render json: @reservation.errors.full_messages, status: 401
        end
  end

  def index
    @reservations = Reservation.all
  end




  private
  # def query_params
  #   params.require(:rquery).permit(:room_id, :guest_num, :start_date, :end_date)
  # end

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
