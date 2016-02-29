class Room < ActiveRecord::Base
  validates :description, :max_sleep_num, :lat, :lng, presence: true
  has_many :reviews

  has_many :reservations
  
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
