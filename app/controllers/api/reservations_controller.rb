class Api::ReservationsController < ApplicationController

  before_action :require_login!#, except: :query

  # def query
  #   # rsvp = Reservation.new(query_params)
  #   # render json: rsvp.overlapping_unbookable_period.empty?
  #   @queryRsvp = Reservation.new(query_params)
  #   render :query, status: 200
  # end
  #
  # def trips
  #   @trips = Reservation.user_trips_with_details(current_user)
  #   render :trips, status: 200
  # end

  def create
    @reservation = current_user.trip_reservations.new(reservation_params)
        # debugger
        if @reservation.save
          render json: @reservation, status: 201
        else
          render json: @reservation.errors.full_messages, status: 401
        end
  end


  private
  # def query_params
  #   params.require(:rquery).permit(:room_id, :guest_num, :start_date, :end_date)
  # end

  def reservation_params
    params.require(:reservation).permit(
    :room_id,
    :guest_num,
    :start_date,
    :end_date,
    :message
    )
  end

end
end
