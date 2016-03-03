json.array! @reservations do |reservation|
  json.id reservation.id
  json.room_id reservation.id
  json.start_date reservation.start_date
  json.end_date reservation.end_date
  json.guest_id reservation.guest_id
  json.guest_num reservation.guest_num
  json.status reservation.status
  json.message reservation.message
end
