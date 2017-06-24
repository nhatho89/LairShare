class Review < ActiveRecord::Base
  validates :user_id, :room_id, :body, :rating, presence: true

  has_one :room

  belongs_to :user

end
