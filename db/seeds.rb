# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Room.create!(
  title: "alamo square, many dogs",
  host_id: 4,
  room_type: "sharedFacility",
  price: 100,
  location: "San Francisco",
  lat: 37.72877375956114,
  lng: -122.574462890625,
  primary_photo_url: 'assets/underwater/underwater-base-2.jpg',
  max_sleep_num: 3,
  description: 'never run out of water!',

)

Room.create!(
  title: "UN plaza, food truck access",
  host_id: 50,
  room_type: "private",
  price: 200,
  location: "San Francisco",
  lat: 37.779760,
  lng: -122.413820,
  primary_photo_url: 'assets/VolcanoLair/underground.jpg',
  max_sleep_num: 5,
  description: 'Very Hot Place!!',
)

Room.create!(
  title: "Ocean Beach, sandy and cold",
  host_id: 3,
  room_type: "wholeFacility",
  price: 300,
  location: "San Francisco",
  lat: 37.369996,
  lng: -122.311281,
  primary_photo_url: 'assets/VolcanoLair/entrance.jpg',
  max_sleep_num: 8,
  description: 'No more rocky patches! Errr.....!',
)
