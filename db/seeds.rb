# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
  username: "Deadpool",
  password: "qweasd"
  )

Room.create!(
  title: "Underwater Fortress",
  host_id: 4,
  room_type: "sharedFacility",
  price: 400,
  location: "San Francisco",
  lat: 37.75733081954469,
  lng: -122.33963012695312,
  primary_photo_url: 'assets/underwater/underwater-base-2.jpg',
  max_sleep_num: 3,
  description: 'never run out of water!',

)

Room.create!(
  title: "Warehouse",
  host_id: 4,
  room_type: "private",
  price: 100,
  location: "San Francisco",
  lat: 37.76284413400416,
  lng: -122.43932783603668,
  primary_photo_url: 'assets/warehouse/warehouse-1.jpg',
  max_sleep_num: 7,
  description: 'Inconspicuously hidden!',

)

Room.create!(
  title: "Forest",
  host_id: 4,
  room_type: "sharedFacility",
  price: 250,
  location: "San Francisco",
  lat: 37.79328295176572,
  lng: -122.46047973632812,
  primary_photo_url: 'assets/forest/forest-1.jpg',
  max_sleep_num: 4,
  description: 'Inconspicuously hidden!',

)

Room.create!(
  title: "Volcano Lair",
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
  title: "Mountain Retreat",
  host_id: 3,
  room_type: "wholeFacility",
  price: 300,
  location: "San Francisco",
  lat: 37.52861709268237,
  lng: -122.4591064453125,
  primary_photo_url: 'assets/Mountain/entrance.jpg',
  max_sleep_num: 8,
  description: 'No more rocky patches! Errr.....!',
)





Reservation.create!(

    room_id: "4",
    guest_id: "1",
    guest_num: "1",
    start_date: "2016-2-01",
    end_date: "2016-4-05",
    status: "1"
  )
