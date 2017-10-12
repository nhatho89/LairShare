class Room < ActiveRecord::Base
  validates :description, :max_sleep_num, :lat, :lng, presence: true

  has_many :reviews

  has_many :reservations

  belongs_to :host,
      primary_key: "id",
      foreign_key: "host_id",
      class_name: "User"

  has_many :room_pics

  def self.in_bounds(bounds)

    self.where("lat < ?", bounds['northEast']['lat'])
        .where("lat > ?", bounds['southWest']['lat'])
        .where("lng > ?", bounds['southWest']['lng'])
        .where("lng < ?", bounds['northEast']['lng'])
  end

  def average_rating
    reviews.average(:rating)
  end

end
