# json.partial! 'api/reviews/review', collection: @reviews, as: :review

json.array! @reviews do |review|
  json.id review.id
  json.body review.body
  json.rating review.rating
  json.room review.room
  json.user review.user
end
