# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
  username: "Magneto",
  password: "qweasd",
  profile_pic: '/assets/magneto.jpg'
  )
User.create!(
  username: "Joker",
  password: "qweasd",
  profile_pic: '/assets/joker.jpg'
  )
User.create!(
  username: "Ultron",
  password: "qweasd",
  profile_pic: '/assets/ultron.jpg'
  )
User.create!(
  username: "Doc Oc",
  password: "qweasd",
  profile_pic: '/assets/dococt.jpg'
  )
User.create!(
  username: "Dr. Evil",
  password: "qweasd",
  profile_pic: '/assets/drEvil.jpg'
  )
User.create!(
  username: "Heisenberg",
  password: "qweasd",
  profile_pic: '/assets/heisenberg.jpg'
  )
User.create!(
  username: "Loki",
  password: "qweasd",
  profile_pic: '/assets/loki.jpg'
  )

Room.create!(
  title: "Underwater Fortress",
  host_id: 2,
  room_type: "Private",
  price: 8000,
  location: "San Francisco",
  lat: 37.75733081954469,
  lng: -122.33963012695312,
  primary_photo_url: 'assets/underwater/underwater-base-2.jpg',
  max_sleep_num: 200,
  description: "Do the police have submarines? I didn't think so. Rent this facility and never be bothered again by the law. Run all your operations in secret from this underwater base."

)

RoomPic.create!(
  room_id: 1,
  pic_url: 'assets/underwater/underwater-base-2.jpg'
)

RoomPic.create!(
  room_id: 1,
  pic_url: 'assets/underwater/underwater-bathroom.jpg'
)

RoomPic.create!(
  room_id: 1,
  pic_url: 'assets/underwater/underwater-bedroom.jpg'
)
RoomPic.create!(
  room_id: 1,
  pic_url: 'assets/underwater/underwater-dinner.jpg'
)

Room.create!(
  title: "Warehouse District",
  host_id: 2,
  room_type: "Private",
  price: 5000,
  location: "New York City",
  lat: 40.802969,
  lng: -73.953323,
  primary_photo_url: 'assets/warehouse/warehouse-1.jpg',
  max_sleep_num: 350,
  description: 'Tucked away under the disguise of an exporting company, no one should ever be bothering you here. Comes with massive warehouses fit to carry anything you need for your clandestine operations.',

)

RoomPic.create!(
  room_id: 2,
  pic_url: 'assets/warehouse/warehouse-1.jpg'
)
RoomPic.create!(
  room_id: 2,
  pic_url: 'assets/warehouse/warehouse-2.jpg'
)
RoomPic.create!(
  room_id: 2,
  pic_url: 'assets/warehouse/warehouse-3.jpg'
)
RoomPic.create!(
  room_id: 2,
  pic_url: 'assets/warehouse/warehouse-4.jpg'
)


Room.create!(
  title: "Forest Shelter",
  host_id: 3,
  room_type: "Shared",
  price: 4000,
  location: "San Francisco",
  lat: 37.79328295176572,
  lng: -122.46047973632812,
  primary_photo_url: 'assets/forest/forest-1.jpg',
  max_sleep_num: 400,
  description: 'Inconspicuously hidden! Camoflaged in the forest, no one looking for you will find you. Enjoy the silence this network of tunnels and secret entrances can provide',

)

RoomPic.create!(
  room_id: 3,
  pic_url: 'assets/forest/forest-1.jpg'
)
RoomPic.create!(
  room_id: 3,
  pic_url: 'assets/forest/forest-2.jpg'
)
RoomPic.create!(
  room_id: 3,
  pic_url: 'assets/forest/forest-3.jpg'
)
RoomPic.create!(
  room_id: 3,
  pic_url: 'assets/forest/forest-4.jpg'
)

Room.create!(
  title: "Volcano Lair",
  host_id: 5,
  room_type: "Shared",
  price: 7000,
  location: "Caribbean",
  lat: 18.057155,
  lng: -63.054512,
  primary_photo_url: 'assets/VolcanoLair/underground.jpg',
  max_sleep_num: 300,
  description: "Very Hot Place!! This is a very popular place due to it's luxury amenities combined with its virtually unlimited supply of thermal energy. This place even comes with its own lava sauna room!"
)
RoomPic.create!(
  room_id: 4,
  pic_url: 'assets/VolcanoLair/volcano-2.jpg'
)
RoomPic.create!(
  room_id: 4,
  pic_url: 'assets/VolcanoLair/volcano-4.jpg'
)
RoomPic.create!(
  room_id: 4,
  pic_url: 'assets/VolcanoLair/volcano-5.jpg'
)
RoomPic.create!(
  room_id: 4,
  pic_url: 'assets/VolcanoLair/volcano-6.jpg'
)


Room.create!(
  title: "Mountain Bunker",
  host_id: 4,
  room_type: "Whole",
  price: 6000,
  location: "San Francisco",
  lat: 37.52861709268237,
  lng: -122.4591064453125,
  primary_photo_url: 'assets/Mountain/entrance.jpg',
  max_sleep_num: 700,
  description: 'Nestled in a mountain, this fortress will guarantee you nuclear blast suvivability. No bombs can penetrate this underground bunker! Sleep well knowing you are safe from surprise air-raids!',
)
RoomPic.create!(
  room_id: 5,
  pic_url: 'assets/Mountain/entrance.jpg'
)
RoomPic.create!(
  room_id: 5,
  pic_url: 'assets/Mountain/mountain-1.jpg'
)
RoomPic.create!(
  room_id: 5,
  pic_url: 'assets/Mountain/mountain-2.jpg'
)
RoomPic.create!(
  room_id: 5,
  pic_url: 'assets/Mountain/mountain-3.jpg'
)

Room.create!(
  title: "Island Fortress",
  host_id: 4,
  room_type: "Private",
  price: 5000,
  location: "Caribbean",
  lat: 18.119799,
  lng: -62.979092,
  primary_photo_url: 'assets/Island/island-2.jpg',
  max_sleep_num: 500,
  description: "Do you enjoy the calming breeze of the beach but can't get away because of obligated clandestine operations? Rent this island fortress and you can continue all your operations while enjoying its beautiful tropical beaches. This facility comes stocked with seaplanes and boats for your transportation needs!"
)

RoomPic.create!(
  room_id: 6,
  pic_url: 'assets/Island/island-2.jpg'
)

RoomPic.create!(
  room_id: 6,
  pic_url: 'assets/Island/island-8.jpg'
)

RoomPic.create!(
  room_id: 6,
  pic_url: 'assets/Island/island-4.jpg'
)

RoomPic.create!(
  room_id: 6,
  pic_url: 'assets/Island/island-5.jpg'
)



Room.create!(
  title: "Chemistry Laboratory",
  host_id: 6,
  room_type: "Whole",
  price: 3000,
  location: "New York",
  lat: 40.68000339369621,
  lng: -73.97232055664062,
  primary_photo_url: 'assets/lab/lab-1.jpg',
  max_sleep_num: 100,
  description: "Need to make...questionable products? Well you're in luck! This facility has all the materials you need to make...ANYTHING! State of the art filtration system means no foul smells to draw attention!"

)

RoomPic.create!(
  room_id: 7,
  pic_url: 'assets/lab/lab-3.jpg'
)

RoomPic.create!(
  room_id: 7,
  pic_url: 'assets/lab/lab-2.jpg'
)

RoomPic.create!(
  room_id: 7,
  pic_url: 'assets/lab/lab-1.jpg'
)
RoomPic.create!(
  room_id: 7,
  pic_url: 'assets/lab/lab-4.jpg'
)


Room.create!(
  title: "Skyrise Office",
  host_id: 5,
  room_type: "Shared",
  price: 7000,
  location: "New York",
  lat: 40.736738336295254,
  lng: -73.99223327636719,
  primary_photo_url: 'assets/office/office-1.jpg',
  max_sleep_num: 400,
  description: "So you want to run a legitimate business while laundering your more...not-so-legitimate money, great! This is the facility for you! Complete office essentials and even a secret floor for whatever it is that you are planning!"

)

RoomPic.create!(
  room_id: 8,
  pic_url: 'assets/office/office-2.jpg'
)

RoomPic.create!(
  room_id: 8,
  pic_url: 'assets/office/office-3.jpg'
)

RoomPic.create!(
  room_id: 8,
  pic_url: 'assets/office/office-1.jpg'
)
RoomPic.create!(
  room_id: 8,
  pic_url: 'assets/office/office-4.jpg'
)


Room.create!(
  title: "Aircraft Carrier",
  host_id: 7,
  room_type: "Whole",
  price: 9000,
  location: "Caribbean",
  lat: 18.163325568174066,
  lng: -62.88368225097656,
  primary_photo_url: 'assets/ship/ship-1.jpg',
  max_sleep_num: 1000,
  description: "An Aircraft Carrier....are you kidding me? Who is going to mess with you? You are on an AIRCRAFT CARRIER! And no it doesn't fly...it only floats."

)

RoomPic.create!(
  room_id: 9,
  pic_url: 'assets/ship/ship-2.jpg'
)

RoomPic.create!(
  room_id: 9,
  pic_url: 'assets/ship/ship-3.jpg'
)

RoomPic.create!(
  room_id: 9,
  pic_url: 'assets/ship/ship-1.jpg'
)
RoomPic.create!(
  room_id: 9,
  pic_url: 'assets/ship/ship-4.jpg'
)


Room.create!(
  title: "Palace",
  host_id: 6,
  room_type: "Shared",
  price: 7000,
  location: "Caribbean",
  lat: 18.288245,
  lng: -62.940745,
  primary_photo_url: 'assets/mansion/mansion-1.jpg',
  max_sleep_num: 400,
  description: "A palace fit for a king. You've done the work building up your empire. Now relax and run the operation in a peaceful mansion secluded from those that want to do you harm."

)

RoomPic.create!(
  room_id: 10,
  pic_url: 'assets/mansion/mansion-1.jpg'
)

RoomPic.create!(
  room_id: 10,
  pic_url: 'assets/mansion/mansion-3.jpg'
)

RoomPic.create!(
  room_id: 10,
  pic_url: 'assets/mansion/mansion-2.jpg'
)
RoomPic.create!(
  room_id: 10,
  pic_url: 'assets/mansion/mansion-4.jpg'
)


Room.create!(
  title: "Super Yacht",
  host_id: 7,
  room_type: "Whole",
  price: 4000,
  location: "New York",
  lat: 40.819729,
  lng: -73.778917,
  primary_photo_url: 'assets/super_yacht/yacht-1.jpg',
  max_sleep_num: 200,
  description: "A floating paradise that happens to be armed to the teeth. Sail safe and relaxed on this super yacht!"

)

RoomPic.create!(
  room_id: 11,
  pic_url: 'assets/super_yacht/yacht-1.jpg'
)

RoomPic.create!(
  room_id: 11,
  pic_url: 'assets/super_yacht/yacht-3.jpeg'
)

RoomPic.create!(
  room_id: 11,
  pic_url: 'assets/super_yacht/yacht-2.jpg'
)
RoomPic.create!(
  room_id: 11,
  pic_url: 'assets/super_yacht/yacht-4.jpg'
)


Room.create!(
  title: "Air Ship",
  host_id: 3,
  room_type: "Private",
  price: 7000,
  location: "San Francisco",
  lat: 37.824397,
  lng: -122.501085,
  primary_photo_url: 'assets/blimp/blimp-1.jpg',
  max_sleep_num: 300,
  description: "You are literally untouchable up here. Floating above the clouds, you can take your operation anywhere in the world!"

)

RoomPic.create!(
  room_id: 12,
  pic_url: 'assets/blimp/blimp-1.jpg'
)

RoomPic.create!(
  room_id: 12,
  pic_url: 'assets/blimp/blimp-3.jpg'
)

RoomPic.create!(
  room_id: 12,
  pic_url: 'assets/blimp/blimp-2.jpg'
)
RoomPic.create!(
  room_id: 12,
  pic_url: 'assets/blimp/blimp-4.jpg'
)



Reservation.create!(
  room_id: "4",
  guest_id: "1",
  guest_num: "200",
  start_date: "2016-1-12",
  end_date: "2016-1-19",
  status: "1"
)

Reservation.create!(
  room_id: "5",
  guest_id: "1",
  guest_num: "500",
  start_date: "2016-3-7",
  end_date: "2016-3-14",
  status: "1"
)


Reservation.create!(
  room_id: "2",
  guest_id: "1",
  guest_num: "100",
  start_date: "2016-2-14",
  end_date: "2016-2-25",
  status: "1"
)


Reservation.create!(
  room_id: "4",
  guest_id: "1",
  guest_num: "200",
  start_date: "2016-5-25",
  end_date: "2016-5-28",
  status: "1"
)

Reservation.create!(
  room_id: "5",
  guest_id: "1",
  guest_num: "500",
  start_date: "2016-5-25",
  end_date: "2016-5-28",
  status: "1"
)


Reservation.create!(
  room_id: "2",
  guest_id: "1",
  guest_num: "100",
  start_date: "2016-5-25",
  end_date: "2016-5-28",
  status: "1"
)
