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

    if (params[:checkin])
      start_date = filter_params["dates"]["checkin"]
      @rooms = @rooms.where("start_date >= ?", Date.now)
    end

    if (params[:end_date])
      end_date = filter_params["dates"]["checkout"]

    end






    # @rooms = rooms.includes(:reviews)
    render 'index'
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
      :start_date,
      :end_date
    )
  end

end
