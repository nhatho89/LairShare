# Schema Information

## rooms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null
title       | string    | not null
host_id     | integer   | not null
room_type   | string    | not null
price       | float     | not null
location    | string    | not null
lat         | float     | not null
lng         | float     | not null
description | string    | not null
primary_photo_url | string    | not null
max_sleep_num     | integer   | not null

## room_pics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null
room_id     | integer   | not null
pic_url     | string    | not null


## reservations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null
room_id     | integer   | not null
guest_id    | integer   | not null
start_date  | date      | not null
end_date    | date      | not null
guest_num   | integer   | not null
message     | text      | not null


## users
column name     | data type | details
----------------|-----------|----------------------
id              | integer   | not null
username        | string    | not null
password_digest | string    | not null
session_token   | string    | not null
profile_pic     | string    | not null, default: "/assets/user-human.png"
