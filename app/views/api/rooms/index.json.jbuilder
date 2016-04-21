# json.partial! 'api/rooms/room', collection: @rooms, as: :room

json.array! @rooms do |room|
  json.id room.id
  json.title room.title
  json.price room.price
  json.location room.location
  json.primary_photo_url room.primary_photo_url
  json.description room.description
  json.max_sleep_num room.max_sleep_num
  json.lat room.lat
  json.lng room.lng
  json.room_type room.room_type

end
