json.array! @trips do |trip|
  json.id               trip.id
  json.room_id          trip.room_id
  json.location         trip.room.location
  json.title            trip.room.title
  json.pic              trip.room.primary_photo_url
  json.price            trip.room.price
  # json.host             trip.host.username
  json.guestId          trip.guest_id
  json.start_date       trip.start_date
  json.end_date         trip.end_date
  json.guest_num        trip.guest_num
  json.status           trip.status
  json.status           Reservation::STATUS[trip.status]
end
