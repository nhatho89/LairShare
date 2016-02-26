class Api::RoomsController < ApplicationController
  def index
    @rooms = Room.all

  end

  def create
    room = Room.create!(room_params)
    render json: room
  end

  private

  def max_sleep_num_range
    (params[:minSleep]..params[:maxSleepNum])
  end

  def room_params
    params.require(:room).permit(
      :lat,
      :lng,
      :description,
      :max_sleep_num
    )
  end

end
