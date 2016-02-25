class Api::RoomsController < ApplicationController
  def index
    @rooms = Room.all

  end

  def create
    room = Room.create!(room_params)
    render json: room
  end

  private

  def seating_range
    (params[:minSeating]..params[:maxSeating])
  end

  def room_params
    params.require(:room).permit(
      :lat,
      :lng,
      :description,
      :seating
    )
  end

end
