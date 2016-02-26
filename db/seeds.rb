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
  type_id: 1,
  price: 100,
  location: "San Francisco",
  lat: 37.775769,
  lng: -122.434960,
  primary_photo_url: 'assets/underwater/underwater-base-2.jpg',
  max_sleep_num: 3,
  description: 'never run out of water!',

)

Room.create!(
  title: "UN plaza, food truck access",
  host_id: 50,
  type_id: 1,
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
  type_id: 1,
  price: 300,
  location: "San Francisco",
  lat: 37.769996,
  lng: -122.511281,
  primary_photo_url: 'assets/VolcanoLair/entrance.jpg',
  max_sleep_num: 8,
  description: 'No more rocky patches! Errr.....!',
)
