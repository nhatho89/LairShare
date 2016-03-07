class Api::RoomsController < ApplicationController
  def index
    @rooms = Room.all

    if(params[:bounds])
      @rooms = Room.in_bounds(params[:bounds])
    end

    if (params[:max_sleep_num])
      @rooms = @rooms.where("max_sleep_num >= ?", params[:max_sleep_num])
    end

    if (params[:roomType])

      @rooms = @rooms.where(room_type: room_type_helper)
    end

    if (params[:priceRange])
      @rooms = @rooms.where("price <= ?", params[:priceRange][:max])
    end

    if (params[:priceRange])
      @rooms = @rooms.where("price >= ?", params[:priceRange][:min])
    end

    if (params[:dates][:startDate] && params[:dates][:endDate])


      end_date = params[:dates][:endDate]
      start_date = params[:dates][:startDate]
      # @rooms = @rooms.reservations.all.where("start_date > ? OR end_date < ?", end_date, start_date )#.
      @rooms = @rooms.where.not(id: Reservation.unavailable_room_ids(start_date, end_date))
    end









    # @rooms = rooms.includes(:reviews)
    render 'index'
  end

  def show
    @room = Room.find(params[:id])
    render :show
  end


  def create
    room = Room.create!(room_params)
    render json: room
  end

  private

  def room_type_helper
    true_rooms = []
    params[:roomType].each do |key, value|
      true_rooms << key if value == "true"
    end
    true_rooms
  end

  def room_params
    params.require(:room).permit(
      :lat,
      :lng,
      :description,
      :max_sleep_num,
      :room_type,
      :price,

    )
  end

end
