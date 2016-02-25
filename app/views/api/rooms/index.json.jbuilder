# json.partial! 'api/rooms/room', collection: @rooms, as: :room

json.array! @rooms do |room|
  json.id room.id
  json.title room.title
  json.price room.price
  json.location room.location


end
