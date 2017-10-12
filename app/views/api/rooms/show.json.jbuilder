json.id @room.id
json.title @room.title
json.price @room.price
json.location @room.location
json.type @room.room_type
json.host @room.host
json.primary_photo_url @room.primary_photo_url
json.description @room.description
json.max_sleep_num @room.max_sleep_num
json.lat @room.lat
json.lng @room.lng
json.avg_rating @room.reviews.average(:rating)

json.pics do
  json.array! (@room.room_pics) do |room_pic|
    json.pic_id   room_pic.id
    json.pic_url  room_pic.pic_url
  end
end

json.reviews do
  json.array! (@room.reviews) do |review|
    json.id review.id
    json.body review.body
    json.rating review.rating
    json.room review.room
    json.user review.user
  end
end
