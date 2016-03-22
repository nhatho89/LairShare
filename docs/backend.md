# Backend

LairShare runs on Ruby on Rails and is hosted on Heroku. The sole purpose of the backend is to provide RESTful APIs and respond with JSON data.

## Heroku

NewRelic application performance management (APM) is used to automatically ping the Heroku dyno, keeping it awake for faster client response.

NewRelic also keeps tracks of any server-side error logs.

## Database

PostgreSQL Relational Database Management System is a must for Heroku.

## Dependencies

Other dependencies include:

- Google Maps API for location services
- BCrypt for password-salting and hashing for a secure authentication system
